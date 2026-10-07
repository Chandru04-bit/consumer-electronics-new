import React from 'react';

export function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-dark-card/60 p-4 shadow-sm overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="relative aspect-square w-full rounded-xl bg-slate-200 dark:bg-slate-800 mb-4 overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent" />
      </div>

      {/* Category & Rating */}
      <div className="flex justify-between items-center mb-2">
        <div className="h-3 w-20 bg-slate-200 dark:bg-slate-800 rounded-full" />
        <div className="h-3 w-10 bg-slate-200 dark:bg-slate-800 rounded-full" />
      </div>

      {/* Title */}
      <div className="h-5 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-md mb-2" />
      
      {/* Subtitle / Tagline */}
      <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded-md mb-4 opacity-70" />

      {/* Color swatches */}
      <div className="flex gap-1.5 mb-4">
        <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800" />
        <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800" />
        <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800" />
      </div>

      {/* Price and Button */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/60">
        <div>
          <div className="h-5 w-16 bg-slate-200 dark:bg-slate-800 rounded-md mb-1" />
          <div className="h-3 w-12 bg-slate-200 dark:bg-slate-800 rounded-md" />
        </div>
        <div className="h-9 w-24 bg-slate-200 dark:bg-slate-800 rounded-xl" />
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 8 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export function SkeletonDetails() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 animate-pulse">
      <div className="lg:col-span-6 space-y-4">
        <div className="aspect-square w-full rounded-3xl bg-slate-200 dark:bg-slate-800" />
      </div>
      <div className="lg:col-span-6 space-y-6">
        <div className="h-4 w-28 bg-slate-200 dark:bg-slate-800 rounded-full" />
        <div className="h-10 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-lg" />
        <div className="h-6 w-1/2 bg-slate-200 dark:bg-slate-800 rounded-lg" />
        <div className="h-12 w-48 bg-slate-200 dark:bg-slate-800 rounded-xl" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="h-4 w-4/6 bg-slate-200 dark:bg-slate-800 rounded" />
        </div>
        <div className="flex gap-4 pt-4">
          <div className="h-14 flex-1 bg-slate-200 dark:bg-slate-800 rounded-xl" />
          <div className="h-14 flex-1 bg-slate-200 dark:bg-slate-800 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
