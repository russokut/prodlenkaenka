import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function escapeHTML(str: string) {
  return str.replace(/[&<>"']/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[m] || m));
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Endpoint for Contact Form
  app.post('/api/contact', async (req, res) => {
    const { name, phone, email, message } = req.body;
    const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
    const chatIdRaw = process.env.TELEGRAM_CHAT_ID?.trim();

    if (!botToken || !chatIdRaw) {
      console.warn('Telegram Bot Token or Chat ID is missing. Returning mock success for UI demo.');
      return res.json({ success: true, note: 'Mock success for demo' });
    }

    // Convert to number if it's a numeric ID (standard for users/groups)
    const chatId = /^-?\d+$/.test(chatIdRaw) ? parseInt(chatIdRaw, 10) : chatIdRaw;

    // Ensure we have strings for escaping
    const safeName = String(name || '');
    const safePhone = String(phone || '');
    const safeEmail = String(email || '');
    const safeMessage = String(message || '');

    const text = [
      '🆕 <b>Новое сообщение с сайта Продлёнка Энка</b>',
      '',
      `👤 <b>Имя:</b> ${escapeHTML(safeName)}`,
      `📞 <b>Телефон:</b> ${escapeHTML(safePhone)}`,
      `📧 <b>Email:</b> ${escapeHTML(safeEmail)}`,
      `💬 <b>Сообщение:</b> ${escapeHTML(safeMessage)}`
    ].join('\n');

    try {
      // First attempt: HTML mode
      let response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'HTML',
        }),
      });

      let result = await response.json();

      // Second attempt: Plain text fallback if HTML fails (error 400)
      if (!response.ok && result.error_code === 400) {
        console.warn('HTML mode failed, trying plain text fallback...');
        const plainText = `Новое сообщение с сайта Продлёнка Энка\n\nИмя: ${safeName}\nТелефон: ${safePhone}\nEmail: ${safeEmail}\nСообщение: ${safeMessage}`;
        
        response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: plainText,
          }),
        });
        result = await response.json();
      }

      if (response.ok) {
        res.json({ success: true });
      } else {
        console.error('Telegram API error details:', JSON.stringify(result, null, 2));
        res.status(400).json({ 
          error: 'Telegram API error', 
          details: result.description || 'Unknown error' 
        });
      }
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
