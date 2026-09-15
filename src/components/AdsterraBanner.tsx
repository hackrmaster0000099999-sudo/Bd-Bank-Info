import React, { useEffect, useRef } from 'react';

interface AdsterraBannerProps {
  format: '320x50' | '300x250';
  className?: string;
}

export const AdsterraBanner: React.FC<AdsterraBannerProps> = ({ format, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous if any
    container.innerHTML = '';

    const iframe = document.createElement('iframe');
    iframe.width = format === '320x50' ? '320' : '300';
    iframe.height = format === '320x50' ? '50' : '250';
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.scrolling = 'no';
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('title', 'Sponsored Advertisement');

    container.appendChild(iframe);

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (doc) {
      doc.open();
      if (format === '320x50') {
        doc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <style>body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: transparent; }</style>
            </head>
            <body>
              <script type="text/javascript">
                atOptions = {
                  'key' : '9985b3ed15cea00f5860e1cba202992d',
                  'format' : 'iframe',
                  'height' : 50,
                  'width' : 320,
                  'params' : {}
                };
              </script>
              <script type="text/javascript" src="https://www.highrevenueformat.com/9985b3ed15cea00f5860e1cba202992d/invoke.js"></script>
            </body>
          </html>
        `);
      } else {
        doc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <style>body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: transparent; }</style>
            </head>
            <body>
              <script type="text/javascript">
                atOptions = {
                  'key' : 'ef3c883f30f5a6468cf71ba693f1428f',
                  'format' : 'iframe',
                  'height' : 250,
                  'width' : 300,
                  'params' : {}
                };
              </script>
              <script type="text/javascript" src="https://www.highrevenueformat.com/ef3c883f30f5a6468cf71ba693f1428f/invoke.js"></script>
            </body>
          </html>
        `);
      }
      doc.close();
    }
  }, [format]);

  return (
    <div className={`flex flex-col items-center justify-center my-3 ${className}`}>
      <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 dark:text-slate-500 mb-1">
        Sponsored
      </span>
      <div
        ref={containerRef}
        className="overflow-hidden flex items-center justify-center min-w-[300px] min-h-[50px] bg-slate-100/60 dark:bg-slate-800/40 rounded-xl p-1 border border-slate-200/60 dark:border-slate-700/60 shadow-2xs"
      />
    </div>
  );
};
