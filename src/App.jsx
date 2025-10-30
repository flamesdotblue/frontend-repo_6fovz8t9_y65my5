import React from 'react';
import HeaderBar from './components/HeaderBar';
import Sidebar from './components/Sidebar';
import DashboardOverview from './components/DashboardOverview';
import SecurityPanels from './components/SecurityPanels';

function App() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-800">
      {/* Top Header */}
      <HeaderBar />

      {/* App Shell */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex gap-6">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 space-y-6">
          <DashboardOverview />
          <SecurityPanels />

          {/* Footer */}
          <footer className="pt-4 text-center text-xs text-slate-500">
            © 2025 CyberGuardian Suite — AI-Powered Security Simplified.
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
