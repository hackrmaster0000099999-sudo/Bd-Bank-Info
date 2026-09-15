import React, { useEffect, useRef } from 'react';

interface AdsterraNativeBannerProps {
  className?: string;
}

export const AdsterraNativeBanner: React.FC<AdsterraNativeBannerProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous if any
    container.innerHTML = '';

    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '180';
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.scrolling = 'no';
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('title', 'Sponsored Recommendations');

    container.appendChild(iframe);

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { margin: 0; padding: 4px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: transparent; overflow: hidden; }
              #container-87d5a823a950b945ea53539315986285 { width: 100%; display: flex; justify-content: center; }
            </style>
          </head>
          <body>
            <script async="async" data-cfasync="false" src="https://pl31355070.profitableratecpmnetwork.com/87d5a823a950b945ea53539315986285/invoke.js"></script>
            <div id="container-87d5a823a950b945ea53539315986285"></div>
          </body>
        </html>
      `);
      doc.close();
    }
  }, []);

  return (
    <div className={`w-full my-4 ${className}`}>
      <div className="flex items-center justify-between px-2 mb-1">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Sponsored Partner Network
        </span>
        <span className="text-[9px] text-slate-400 dark:text-slate-500">Ad</span>
      </div>
      <div
        ref={containerRef}
        className="w-full min-h-[160px] bg-slate-50/80 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-2 shadow-xs overflow-hidden"
      />
    </div>
  );
};
