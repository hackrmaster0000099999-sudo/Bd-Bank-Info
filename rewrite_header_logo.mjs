import fs from 'fs';

let code = fs.readFileSync('src/components/Header.tsx', 'utf-8');

const oldLogoBlock = `<div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform duration-200">
              <Building2 className="w-5 h-5" />
            </div>`;
const newLogoBlock = `<div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform duration-200 overflow-hidden border border-slate-100 dark:border-slate-800">
              <img src="/logo.png" alt="BD Bank Info Logo" className="w-full h-full object-cover" onError={(e) => {
                // Fallback if logo not yet uploaded
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }} />
              <Building2 className="w-5 h-5 text-emerald-600 hidden" />
            </div>`;

code = code.replace(oldLogoBlock, newLogoBlock);
fs.writeFileSync('src/components/Header.tsx', code);
