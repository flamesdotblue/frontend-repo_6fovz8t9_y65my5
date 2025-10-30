import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, AlertTriangle, Cloud, Lock, Activity } from 'lucide-react';

const cards = [
  {
    title: 'Total Threats Detected',
    value: '1,284',
    trend: '+12% this week',
    icon: AlertTriangle,
    accent: 'from-[#9FE8FA] to-[#E0F7FA] text-[#0ea5e9]',
  },
  {
    title: 'Active Sessions',
    value: '342',
    trend: 'stable',
    icon: Activity,
    accent: 'from-[#c5f7e9] to-[#e8fff7] text-emerald-600',
  },
  {
    title: 'Cloud Alerts',
    value: '8',
    trend: '3 critical',
    icon: Cloud,
    accent: 'from-[#dfe7ff] to-[#eef2ff] text-indigo-700',
  },
  {
    title: 'Data Vault Status',
    value: 'AES-256',
    trend: 'Encrypted',
    icon: Lock,
    accent: 'from-[#cdefff] to-[#f0fdff] text-sky-700',
  },
];

const DashboardOverview = () => {
  return (
    <section className="flex-1">
      {/* Full-width hero with Spline cover */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
        <div className="relative h-[360px] sm:h-[420px]">
          <Spline
            scene="https://prod.spline.design/vwPe8k3Yw7HcN4yu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Soft gradient veil for readability */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-white/10" />
          {/* Content card */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 sm:px-8 md:px-12 w-full">
              <div className="max-w-xl rounded-2xl backdrop-blur-md bg-white/60 border border-white/70 shadow-[0_6px_30px_rgba(79,143,255,0.18)] p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-slate-200 w-fit text-xs text-slate-600 shadow-sm">
                  <Shield className="h-4 w-4 text-[#4F8FFF]" />
                  <span>AI-Powered Security Simplified</span>
                </div>
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-800 tracking-tight">
                  Welcome back, Alex! Your systems are secure and monitored.
                </h2>
                <p className="mt-3 text-slate-600">
                  A unified view of intelligent threat detection, secure access, and cloud protection — where cyber defense meets calm elegance.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#4F8FFF] to-[#86b4ff] text-white text-sm shadow-[0_12px_36px_rgba(79,143,255,0.45)] hover:shadow-[0_16px_42px_rgba(79,143,255,0.55)] transition-all">
                    Scan Now
                  </button>
                  <button className="px-4 py-2 rounded-xl bg-white text-slate-700 text-sm border border-slate-200 hover:shadow-md transition-all">
                    View Reports
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {cards.map(({ title, value, trend, icon: Icon, accent }) => (
          <div
            key={title}
            className="relative rounded-2xl bg-white border border-slate-200 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_12px_40px_rgba(15,23,42,0.05)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_16px_50px_rgba(15,23,42,0.08)] transition-shadow"
          >
            <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${accent} grid place-items-center mb-3 shadow-sm`}>
              <Icon className="h-5 w-5" />
            </div>
            <div className="text-slate-600 text-xs">{title}</div>
            <div className="text-xl font-semibold text-slate-800">{value}</div>
            <div className="text-xs mt-1 text-slate-500">{trend}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DashboardOverview;
