import React from 'react';
import { Bell, Search, User, Shield } from 'lucide-react';

const HeaderBar = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 select-none">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#9FE8FA] to-[#E0F7FA] shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_30px_rgba(79,143,255,0.25)] flex items-center justify-center">
            <Shield className="h-5 w-5 text-[#4F8FFF]" />
          </div>
          <span className="font-semibold text-slate-800 tracking-tight">CyberGuardian Suite</span>
        </div>

        {/* Center: Title */}
        <h1 className="hidden md:block text-slate-700 font-medium">Unified Security Dashboard</h1>

        {/* Right: Search, Notifications, Profile */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F9FAFB] border border-slate-200 shadow-inner text-slate-500 focus-within:ring-2 focus-within:ring-sky-200">
            <Search className="h-4 w-4" />
            <input
              placeholder="Search"
              className="bg-transparent outline-none text-sm placeholder:text-slate-400 min-w-[140px]"
            />
          </div>
          <button className="relative p-2 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow border border-slate-200 text-slate-600">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#4F8FFF] text-white text-[10px] grid place-items-center">3</span>
          </button>
          <button className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-[#c7e8ff] to-[#eaf4ff] grid place-items-center text-[#4F8FFF]">
              <User className="h-4 w-4" />
            </div>
            <span className="text-sm text-slate-600">Alex</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
