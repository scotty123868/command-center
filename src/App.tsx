import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { config } from './data/config';
import Sidebar from './components/Sidebar';
import SearchModal from './components/SearchModal';
import Dashboard from './pages/Dashboard';
import TechStack from './pages/TechStack';
import Workflows from './pages/Workflows';
import LicenseAudit from './pages/LicenseAudit';
import Stories from './pages/Stories';
import ROISummary from './pages/ROISummary';
import Assessment from './pages/Assessment';
import DataFlow from './pages/DataFlow';
import Integrations from './pages/Integrations';

const routeTitles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/tech-stack': 'Tech Stack Mapping',
  '/workflows': 'Workflow Automation',
  '/license-audit': 'License Audit',
  '/data-flow': 'Data Flow Intelligence',
  '/integrations': 'Integrations',
  '/stories': 'Company Dashboards',
  '/roi-summary': 'ROI Summary',
  '/assessment': 'AI Assistant',
};

function TopBar() {
  const location = useLocation();
  const pageTitle = routeTitles[location.pathname] || 'Dashboard';

  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
      <div className="flex items-center justify-between px-10 h-14">
        {/* Left — Page title */}
        <span className="text-[13px] font-medium text-gray-500">{pageTitle}</span>

        {/* Right — Search + Avatar */}
        <div className="flex items-center gap-4">
          {/* Search bar (visual only) */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-gray-400 pointer-events-none" strokeWidth={2} />
            <input
              type="text"
              readOnly
              placeholder="Search across analysis..."
              className="w-[260px] h-8 pl-8 pr-14 rounded-lg bg-gray-50 border border-transparent text-[13px] text-gray-600 placeholder:text-gray-400 focus:outline-none focus:border-blue-100 focus:ring-1 focus:ring-blue-100 focus:bg-white transition-all duration-200 cursor-pointer"
              onClick={() => {
                window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true }));
              }}
            />
            {/* Keyboard shortcut hint */}
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-gray-200/60 text-[10px] font-medium text-gray-400 leading-none">
              <span className="text-[11px]">{'\u2318'}</span>K
            </span>
          </div>

          {/* User avatar */}
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 cursor-default">
            <span className="text-[11px] font-semibold text-white leading-none">{config.userInitials}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
      >
        <Routes location={location}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/workflows" element={<Workflows />} />
          <Route path="/license-audit" element={<LicenseAudit />} />
          <Route path="/data-flow" element={<DataFlow />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/roi-summary" element={<ROISummary />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const location = useLocation();
  const isFullBleed = location.pathname === '/assessment';

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden bg-[#F8F9FB]">
        <TopBar />
        {isFullBleed ? (
          <div className="flex-1 overflow-hidden">
            <AnimatedRoutes />
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto px-10 py-8">
              <AnimatedRoutes />
            </div>
          </div>
        )}
      </main>
      <SearchModal />
    </div>
  );
}
