"use client";

import { ShoppingBag, Search, ShieldCheck } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-amber-500 rounded-xl flex items-center justify-center font-bold text-black text-xl shadow-lg shadow-amber-500/20">
            E
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              ELITE STORE
            </span>
            <div className="flex items-center text-[10px] text-amber-400 gap-1 font-mono tracking-widest uppercase">
              <ShieldCheck className="w-3 h-3" /> Guaranteed Quality
            </div>
          </div> 
        </div>

        {/* Search Input */}
        <div className="hidden md:flex items-center relative w-72">
          <input
            type="text"
            placeholder="Zoek exclusieve items..."
            className="w-full bg-neutral-900 border border-neutral-800 rounded-full py-2 pl-10 pr-4 text-sm text-neutral-200 focus:outline-none focus:border-amber-500 transition-all placeholder:text-neutral-500"
          />
          <Search className="w-4 h-4 text-neutral-500 absolute left-3.5" />
        </div>

        {/* Cart Button */}
        <button
          onClick={onOpenCart}
          className="relative p-2.5 bg-neutral-900 border border-neutral-800 rounded-full hover:border-neutral-700 transition-colors group"
        >
          <ShoppingBag className="w-5 h-5 text-neutral-300 group-hover:text-amber-400 transition-colors" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
