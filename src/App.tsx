import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const whatsappUrl = 'https://wa.me/qr/7KBSS7DZYR3NE1';

  return (
    <div className="min-h-screen bg-stone-950 text-white flex flex-col items-center justify-center p-6 text-center select-none font-sans">
      <div className="space-y-12 max-w-lg w-full">
        {/* Top Center: Domain For Sale */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase text-white drop-shadow-md">
          Domain For Sale
        </h1>

        {/* Bottom: WhatsApp Connect Button with Icon & Link */}
        <div className="pt-4 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-lg sm:text-xl rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <MessageCircle className="w-8 h-8 fill-black text-[#25D366]" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
