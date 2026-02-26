import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
      
      {/* Floating Action Button for Mobile */}
      <button className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-brand-coral text-white rounded-full shadow-2xl flex items-center justify-center z-40 animate-bounce">
        <Phone className="w-6 h-6" />
      </button>
    </div>
  );
}

import { Phone } from 'lucide-react';
