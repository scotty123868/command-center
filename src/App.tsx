import { useState, useCallback, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';
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
import ExecutiveBriefing from './pages/ExecutiveBriefing';
import BoardReportPage from './pages/BoardReport';

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
  '/executive-briefing': 'Executive Briefing',
  '/board-report': 'Board Report',
};

function TopBar({ onMenuClick }: { onMenuClick: () => void }) {
  const location = useLocation();
  const pageTitle = routeTitles[location.pathname] || 'Dashboard';

  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
      <div className="flex items-center justify-between px-4 lg:px-10 h-14">
        {/* Left — Hamburger (mobile) + Page title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors lg:hidden"
          >
            <Menu className="h-5 w-5" strokeWidth={1.8} />
          </button>
          <span className="text-[13px] font-medium text-gray-500">{pageTitle}</span>
        </div>

        {/* Right — Search + Avatar */}
        <div className="flex items-center gap-4">
          {/* Search bar (visual only) — hidden on mobile */}
          <div className="relative hidden lg:block">
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
          <Route path="/executive-briefing" element={<ExecutiveBriefing />} />
          <Route path="/board-report" element={<BoardReportPage />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

// Full-bleed routes: no sidebar, no top bar, no padding
const FULL_BLEED_ROUTES = ['/assessment', '/board-report'];

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isFullBleed = FULL_BLEED_ROUTES.includes(location.pathname);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  // Demo reset: clear sessionStorage and redirect
  useEffect(() => {
    if (searchParams.get('reset') === 'true') {
      const keysToRemove: string[] = [];
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key && (key.startsWith('analysis') || key.startsWith('tour'))) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach((k) => sessionStorage.removeItem(k));
      navigate('/dashboard', { replace: true });
    }
  }, [searchParams, navigate]);

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  // Board report page: standalone, no chrome at all
  if (location.pathname === '/board-report') {
    return <AnimatedRoutes />;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop sidebar — always visible at lg+ (hidden on full-bleed) */}
      {!isFullBleed && (
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
      )}

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="sidebar-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={closeSidebar}
            />
            {/* Sidebar panel */}
            <motion.div
              key="sidebar-panel"
              initial={{ x: -240 }}
              animate={{ x: 0 }}
              exit={{ x: -240 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 left-0 z-50 lg:hidden"
            >
              <Sidebar onNavClick={closeSidebar} onClose={closeSidebar} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col overflow-hidden bg-[#F8F9FB]">
        {!isFullBleed && <TopBar onMenuClick={() => setSidebarOpen(true)} />}
        {isFullBleed ? (
          <div className="flex-1 overflow-hidden">
            <AnimatedRoutes />
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto px-4 py-4 lg:px-10 lg:py-8">
              <AnimatedRoutes />
            </div>
          </div>
        )}
      </main>
      <SearchModal />
    </div>
  );
}
