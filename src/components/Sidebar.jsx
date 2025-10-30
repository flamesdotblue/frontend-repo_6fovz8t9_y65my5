import React from 'react';
import { Home, Brain, Lock, Database, Cloud, Activity, Settings } from 'lucide-react';

const items = [
  { icon: Home, label: 'Dashboard' },
  { icon: Brain, label: 'Threat Detection' },
  { icon: Lock, label: 'Authentication' },
  { icon: Database, label: 'Data Vault' },
  { icon: Cloud, label: 'Cloud Security' },
  { icon: Activity, label: 'Anomaly Detection' },
  { icon: Settings, label: 'Admin / Settings' },
];

const Sidebar = () => {
  return (
    <aside className="hidden md:block w-60 shrink-0 p-4 bg-[#F9FAFB] border-r border-slate-200">
      <nav className="space-y-1">
        {items.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:text-slate-800 hover:bg-white border border-transparent hover:border-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-colors group"
          >
            <span className="relative">
              <Icon className="h-5 w-5 text-slate-500 group-hover:text-[#4F8FFF]" />
              <span className="absolute -inset-2 rounded-xl bg-cyan-200/30 opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
            </span>
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
