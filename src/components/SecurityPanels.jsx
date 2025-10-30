import React from 'react';
import { AlertTriangle, CheckCircle, Info, Upload, Lock } from 'lucide-react';

const MiniChart = () => (
  <svg viewBox="0 0 120 40" className="w-full h-16">
    <defs>
      <linearGradient id="grad" x1="0" x2="1">
        <stop offset="0%" stopColor="#9FE8FA" />
        <stop offset="100%" stopColor="#4F8FFF" />
      </linearGradient>
    </defs>
    <path d="M0,30 C20,28 20,5 40,8 C60,12 60,35 80,30 C100,24 100,10 120,14" fill="none" stroke="url(#grad)" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const ThreatDetection = () => (
  <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
    <div className="flex items-center justify-between">
      <h3 className="text-slate-800 font-medium">Threat Detection</h3>
      <span className="text-xs text-slate-500">Phishing Attempts Over Time</span>
    </div>
    <div className="mt-2">
      <MiniChart />
    </div>
    <div className="mt-4 grid grid-cols-3 gap-2">
      {[
        { label: 'Phishing', color: 'bg-[#ffccd5]', icon: AlertTriangle },
        { label: 'Malware', color: 'bg-[#d6f5e8]', icon: CheckCircle },
        { label: 'Policy', color: 'bg-[#e7f0ff]', icon: Info },
      ].map(({ label, color, icon: Icon }) => (
        <div key={label} className="flex items-center gap-2 p-2 rounded-xl border border-slate-200 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
          <span className={`h-6 w-6 rounded-md ${color} grid place-items-center`}>
            <Icon className="h-4 w-4 text-slate-700" />
          </span>
          <span className="text-xs text-slate-600">{label}</span>
        </div>
      ))}
    </div>
    <div className="mt-4 flex items-center gap-2 text-xs">
      <span className="px-2 py-1 rounded-full bg-[#ffe4e6] text-rose-600">Critical</span>
      <span className="px-2 py-1 rounded-full bg-[#fff7ed] text-amber-600">Warning</span>
      <span className="px-2 py-1 rounded-full bg-[#eef2ff] text-indigo-600">Info</span>
    </div>
  </div>
);

const AuthAccess = () => (
  <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
    <h3 className="text-slate-800 font-medium">Authentication & Access</h3>
    <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
      {[
        { title: 'Passwordless Logins', status: 'active' },
        { title: 'WebAuthn Tokens', status: 'pending' },
        { title: 'MFA Activity', status: 'active' },
      ].map(({ title, status }) => (
        <div key={title} className="p-3 rounded-xl border border-slate-200 bg-gradient-to-br from-white to-[#F9FAFB] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
          <div className="text-sm text-slate-700">{title}</div>
          <div className="mt-1 text-xs flex items-center gap-2">
            <span
              className={`h-2.5 w-2.5 rounded-full ${status === 'active' ? 'bg-emerald-500' : 'bg-amber-400'}`}
            />
            <span className="text-slate-500">{status === 'active' ? 'Active' : 'Pending'}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const DataVault = () => (
  <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
    <div className="flex items-center justify-between">
      <h3 className="text-slate-800 font-medium">Data Vault</h3>
      <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-sm">
        <Upload className="h-4 w-4 text-[#0ea5e9]" /> Upload Securely
      </button>
    </div>
    <p className="mt-1 text-xs text-slate-500">Zero-knowledge encryption enabled.</p>
    <div className="mt-3 divide-y divide-slate-200 rounded-xl overflow-hidden border border-slate-200 bg-[#F9FAFB]">
      {[
        'customer_export.csv',
        'q1_financials.pdf',
        'infrastructure_map.drawio',
      ].map((name) => (
        <div key={name} className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-emerald-600" />
            <span className="text-sm text-slate-700">{name}</span>
          </div>
          <span className="text-xs text-slate-500">AES-256 | Encrypted</span>
        </div>
      ))}
    </div>
  </div>
);

const CloudScanner = () => (
  <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
    <h3 className="text-slate-800 font-medium">Cloud Security</h3>
    <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
      {[
        { provider: 'AWS', mis: 3 },
        { provider: 'GCP', mis: 1 },
        { provider: 'Azure', mis: 2 },
      ].map(({ provider, mis }) => (
        <div key={provider} className="p-3 rounded-xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
          <div className="text-sm font-medium text-slate-700">{provider}</div>
          <div className="mt-1 text-xs text-slate-500">{mis} misconfigurations detected</div>
          <button className="mt-3 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#9FE8FA] to-[#E0F7FA] text-slate-800 text-xs shadow hover:shadow-md transition-shadow">Fix Now</button>
        </div>
      ))}
    </div>
  </div>
);

const AnomalyDetection = () => (
  <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
    <div className="flex items-center justify-between">
      <h3 className="text-slate-800 font-medium">Anomaly Detection</h3>
      <span className="text-xs text-slate-500">User activity heatmap</span>
    </div>
    <div className="mt-3 grid grid-cols-12 gap-1">
      {Array.from({ length: 60 }).map((_, i) => (
        <span
          key={i}
          className={`h-4 rounded ${i % 7 === 0 ? 'bg-cyan-300/70' : i % 5 === 0 ? 'bg-cyan-200/70' : 'bg-slate-200'}`}
        />
      ))}
    </div>
    <div className="mt-4 space-y-2">
      {[
        { ts: '10:21 AM', note: 'Unusual login from new device (US → EU)' },
        { ts: '09:58 AM', note: 'Spike in password reset attempts' },
      ].map(({ ts, note }, idx) => (
        <div key={idx} className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#F9FAFB] border border-slate-200">
          <span className="text-xs text-slate-600">{note}</span>
          <span className="text-[11px] text-slate-500">{ts}</span>
        </div>
      ))}
    </div>
  </div>
);

const SecurityPanels = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <ThreatDetection />
      <AuthAccess />
      <DataVault />
      <CloudScanner />
      <AnomalyDetection />
    </section>
  );
};

export default SecurityPanels;
