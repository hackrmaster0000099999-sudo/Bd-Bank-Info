import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    ezstandalone?: {
      cmd?: Array<() => void>;
      showAds?: (options?: Record<string, unknown>) => void;
      [key: string]: unknown;
    };
  }
}

interface EzoicAdSpotProps {
  id?: string;
  className?: string;
}

export const EzoicAdSpot: React.FC<EzoicAdSpotProps> = ({ id, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const calledRef = useRef(false);

  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;

    if (typeof window !== 'undefined') {
      window.ezstandalone = window.ezstandalone || {};
      window.ezstandalone.cmd = window.ezstandalone.cmd || [];
      window.ezstandalone.cmd.push(function () {
        if (typeof window.ezstandalone?.showAds === 'function') {
          window.ezstandalone.showAds({});
        }
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`ezoic-ad-container my-4 flex justify-center items-center min-h-[50px] overflow-hidden ${className}`}
      aria-label="Advertisement"
    >
      <div className="text-[10px] uppercase tracking-wider text-slate-400/60 dark:text-slate-500/60 sr-only">
        Advertisement
      </div>
    </div>
  );
};
