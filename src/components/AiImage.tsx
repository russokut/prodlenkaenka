import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface AiImageProps {
  prompt: string;
  alt: string;
  className?: string;
  aspectRatio?: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
}

export const AiImage: React.FC<AiImageProps> = ({ prompt, alt, className, aspectRatio = "16:9" }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateImage = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: prompt }],
          },
          config: {
            imageConfig: {
              aspectRatio: aspectRatio,
            },
          },
        });

        const imagePart = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
        if (imagePart?.inlineData) {
          setImageUrl(`data:image/png;base64,${imagePart.inlineData.data}`);
        } else {
          setError("Изображение не найдено в ответе");
        }
      } catch (err) {
        console.error("AI Image Error:", err);
        setError("Ошибка генерации");
      } finally {
        setLoading(false);
      }
    };

    generateImage();
  }, [prompt, aspectRatio]);

  if (loading) {
    return (
      <div className={`${className} bg-slate-100 animate-pulse flex items-center justify-center text-slate-400 text-xs`}>
        Генерация AI...
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className={`${className} bg-slate-200 flex items-center justify-center text-slate-500 text-xs p-4 text-center`}>
        {error || "Ошибка"}
      </div>
    );
  }

  return (
    <img 
      src={imageUrl} 
      alt={alt} 
      className={className}
      referrerPolicy="no-referrer"
    />
  );
};
