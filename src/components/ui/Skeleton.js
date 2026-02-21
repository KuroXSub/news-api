import React from 'react';

export default function Skeleton({ isFeatured }) {
  return (
    <div className={`animate-pulse rounded-2xl bg-surface border border-border overflow-hidden ${isFeatured ? 'md:col-span-2 md:row-span-2 h-[450px]' : 'h-[300px]'}`}>
      <div className="w-full h-full bg-zinc-800/50 dark:bg-zinc-800/20 flex flex-col justify-end p-6">
        <div className="w-20 h-6 bg-zinc-700/50 dark:bg-zinc-700/30 rounded-full mb-4"></div>
        <div className="w-full h-6 bg-zinc-700/50 dark:bg-zinc-700/30 rounded-md mb-2"></div>
        <div className="w-3/4 h-6 bg-zinc-700/50 dark:bg-zinc-700/30 rounded-md mb-4"></div>
        {isFeatured && (
          <>
            <div className="w-full h-4 bg-zinc-700/50 dark:bg-zinc-700/30 rounded-md mb-2 mt-4"></div>
            <div className="w-5/6 h-4 bg-zinc-700/50 dark:bg-zinc-700/30 rounded-md"></div>
          </>
        )}
      </div>
    </div>
  );
}