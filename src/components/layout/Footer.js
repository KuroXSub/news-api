import React from 'react';

export default function Footer({ setView }) {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 mt-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
          <div className="w-6 h-6 bg-indigo-500 rounded-md flex items-center justify-center font-bold text-white text-xs">
            N
          </div>
          <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
            Kuro<span className="text-zinc-500 dark:text-zinc-400 font-medium">News</span>
          </span>
        </div>
        
        <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center md:text-left">
          &copy; {new Date().getFullYear()} KuroNews. Dibangun menggunakan React & Tailwind CSS.
        </p>
        
        <div className="flex gap-4 text-sm text-zinc-500 dark:text-zinc-400">
          <button 
            onClick={() => setView('about')}
            className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer font-medium"
          >
            Informasi Website
          </button>
        </div>
        
      </div>
    </footer>
  );
}