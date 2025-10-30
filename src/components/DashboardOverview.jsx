import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, AlertTriangle, Cloud, Lock, Activity } from 'lucide-react';

const cards = [
  {
    title: 'Total Threats Detected',
    value: '1,284',
    trend: '+12% this week',
    icon: AlertTriangle,
    accent: 'from-[#c0e7ff] to-[#e8f3ff] text-[#2b6cb0]',
  },
  {
    title: 'Active Sessions',
    value: '342',
    trend: 'stable',
    icon: Activity,
    accent: 'from-[#cdfae6] to-[#e9fff5] text-[#0f766e]',
  },
  {
    title: 'Cloud Alerts',
    value: '8',
    trend: '3 critical',
    icon: Cloud,
    accent: 'from-[#e7e3ff] to-[#f4f1ff] text-[#4c1d95]',
  },
  {
    title: 'Data Vault Status',
    value: 'AES-256',
    trend: 'Encrypted',
    icon: Lock,
    accent: 'from-[#d6f6ff] to-[#f0fdff] text-[#0369a1]',
  },
];

const DashboardOverview = () => {
  return (
    <section className="flex-1">
      {/* Hero with Spline */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-[#F9FAFB] to-[#E9EEF6] p-0 shadow-sm">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-slate-200 w-fit text-xs text-slate-600 shadow-sm">
              <Shield className="h-4 w-4 text-[#4F8FFF]" />
              <span>AI-Powered Security Simplified</span>
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-800 tracking-tight">
              Welcome back, Alex! Your systems are secure and monitored.
            </h2>
            <p className="mt-3 text-slate-600 max-w-xl">
              A unified view of intelligent threat detection, secure access, and cloud protection — where cyber defense meets calm elegance.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button className="px-4 py-2 rounded-xl bg-[#4F8FFF] text-white text-sm shadow-[0_10px_30px_rgba(79,143,255,0.35)] hover:shadow-[0_12px_36px_rgba(79,143,255,0.45)] transition-shadow">Scan Now</button>
              <button className="px-4 py-2 rounded-xl bg-white text-slate-700 text-sm border border-slate-200 hover:shadow-sm transition-shadow">View Reports</button>
            </div>
          </div>
          <div className="h-[260px] md:h-[320px] lg:h-[360px]">
            <div className="relative h-full w-full">
              <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {cards.map(({ title, value, trend, icon: Icon, accent }) => (
          <div key={title} className="relative rounded-2xl bg-white border border-slate-200 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_30px_rgba(19,35,62,0.04)]">
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
