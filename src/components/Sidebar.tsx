import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Layers,
  GitBranch,
  FileSearch,
  Network,
  Plug,
  BookOpen,
  TrendingUp,
  ChevronDown,
  Zap,
  Sparkles,
  X,
  Building2,
  Landmark,
  Check,
} from 'lucide-react';
import { useCompany } from '../data/CompanyContext';

const analysisItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/tech-stack', icon: Layers, label: 'Tech Stack Mapping' },
  { to: '/workflows', icon: GitBranch, label: 'Workflow Automation' },
  { to: '/license-audit', icon: FileSearch, label: 'License Audit' },
  { to: '/data-flow', icon: Network, label: 'Data Flow Intelligence' },
  { to: '/integrations', icon: Plug, label: 'Integrations' },
];

const insightsItems = [
  { to: '/stories', icon: BookOpen, label: 'Company Dashboards' },
  { to: '/roi-summary', icon: TrendingUp, label: 'ROI Summary' },
  { to: '/assessment', icon: Sparkles, label: 'AI Assistant' },
];

function NavItem({ to, icon: Icon, label, onNavClick }: { to: string; icon: React.ElementType; label: string; onNavClick?: () => void }) {
  return (
    <NavLink
      to={to}
      onClick={() => onNavClick?.()}
      className={({ isActive }) =>
        [
          'group relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-[250ms] ease-out',
          isActive
            ? 'text-white bg-white/[0.08]'
            : 'text-[#6B7280] hover:text-[#A0A0A8]',
        ].join(' ')
      }
    >
      {({ isActive }) => (
        <>
          {/* Active indicator bar */}
          {isActive && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-4 rounded-full bg-accent" />
          )}
          <Icon className="w-[18px] h-[18px] flex-shrink-0" strokeWidth={1.8} />
          <span className="text-[13px] font-medium">{label}</span>
        </>
      )}
    </NavLink>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block px-3 mt-5 mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#4A4A50] select-none">
      {children}
    </span>
  );
}

export default function Sidebar({ onNavClick, onClose }: { onNavClick?: () => void; onClose?: () => void }) {
  const { company, companies, setCompanyId } = useCompany();
  const parentCompany = company.parentId ? companies.find((c) => c.id === company.parentId) : null;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [pillFlash, setPillFlash] = useState(false);
  const prevCompanyIdRef = useRef(company.id);

  useEffect(() => {
    if (company.id !== prevCompanyIdRef.current) {
      prevCompanyIdRef.current = company.id;
      setPillFlash(true);
      const timer = setTimeout(() => setPillFlash(false), 800);
      return () => clearTimeout(timer);
    }
  }, [company.id]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [dropdownOpen]);

  return (
    <aside
      className="relative w-[240px] min-w-[240px] h-screen flex flex-col overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #16161A 0%, #1B1B1F 100%)',
      }}
    >
      {/* Subtle inner glow / glass shine at top */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)',
        }}
      />

      {/* Close button for mobile overlay */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors lg:hidden"
        >
          <X className="h-4 w-4" strokeWidth={2} />
        </button>
      )}

      {/* ── Brand ─────────────────────────────────── */}
      <div className="relative px-5 pt-6 pb-2">
        <div className="flex items-center gap-2.5">
          {/* Logo mark */}
          <div className="w-7 h-7 rounded-lg bg-accent/90 flex items-center justify-center flex-shrink-0">
            <Zap className="w-3.5 h-3.5 text-white" strokeWidth={2.2} fill="currentColor" />
          </div>

          {/* Wordmark */}
          <div className="flex items-baseline gap-0">
            <span
              className="text-white font-semibold text-[26px] leading-none"
              style={{ letterSpacing: '-0.04em' }}
            >
              UpSkiller
            </span>
            <span
              className="text-accent font-semibold text-[26px] leading-none ml-1.5"
              style={{
                letterSpacing: '-0.04em',
                textShadow: '0 0 20px rgba(66, 133, 244, 0.4), 0 0 40px rgba(66, 133, 244, 0.15)',
              }}
            >
              AI
            </span>
          </div>
        </div>

        <p className="text-[10px] uppercase tracking-widest text-[#4A4A50] mt-1.5 ml-[38px] font-medium">
          Command Center
        </p>
      </div>

      {/* ── Brand / Company separator ─────────────── */}
      <div className="mx-5 mt-3 h-px bg-white/[0.04]" />

      {/* ── Company Selector ──────────────────────── */}
      <div className="px-4 mt-3 mb-2 relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-white/[0.07] transition-all duration-500 cursor-pointer ${
            pillFlash
              ? 'bg-accent/10 border border-accent/30'
              : 'bg-white/[0.04] border border-white/[0.06]'
          }`}
        >
          <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${
            company.category === 'conglomerate' ? 'bg-purple-500/20' :
            company.category === 'sovereign' ? 'bg-emerald-500/20' :
            'bg-accent/20'
          }`}>
            <span className={`text-[10px] font-bold ${
              company.category === 'conglomerate' ? 'text-purple-300' :
              company.category === 'sovereign' ? 'text-emerald-300' :
              'text-accent'
            }`}>{company.initials}</span>
          </div>
          <div className="flex-1 min-w-0 text-left">
            {parentCompany && (
              <span className="text-[9px] font-medium text-white/30 truncate block">{parentCompany.shortName}</span>
            )}
            <span className={`text-[12px] font-medium truncate block transition-colors duration-500 ${
              pillFlash ? 'text-white' : 'text-[#A0A0A8]'
            }`}>
              {company.shortName}
            </span>
          </div>
          <ChevronDown
            className={`w-3.5 h-3.5 text-[#4A4A50] flex-shrink-0 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
            strokeWidth={2}
          />
        </button>

        {/* Dropdown menu */}
        {dropdownOpen && (
          <div className="absolute left-4 right-4 top-full mt-1 bg-[#2B2B2F] rounded-xl shadow-2xl z-50 border border-white/[0.08] overflow-hidden py-1">
            {(['company', 'conglomerate', 'sovereign'] as const).map((cat, catIdx) => {
              const group = companies.filter((c) => c.category === cat && !c.parentId);
              if (group.length === 0) return null;
              const catLabel = cat === 'conglomerate' ? 'Conglomerate' : cat === 'sovereign' ? 'Sovereign' : 'Companies';
              const CatIcon = cat === 'conglomerate' ? Building2 : cat === 'sovereign' ? Landmark : null;

              return (
                <div key={cat}>
                  {catIdx > 0 && <div className="mx-2.5 my-1 h-px bg-white/[0.06]" />}
                  <div className="flex items-center gap-1.5 px-3 pt-2.5 pb-1">
                    {CatIcon && <CatIcon className="w-3 h-3 text-white/20" strokeWidth={1.5} />}
                    <span className="text-[9px] font-bold text-white/25 uppercase tracking-[0.12em]">
                      {catLabel}
                    </span>
                  </div>
                  {group.map((c) => {
                    const isSelected = c.id === company.id;
                    const subEntities = companies.filter((sub) => sub.parentId === c.id);
                    return (
                      <div key={c.id}>
                        <button
                          type="button"
                          onClick={() => {
                            setCompanyId(c.id);
                            setDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-2.5 px-3 py-2 text-left transition-colors duration-150 hover:bg-white/10 ${
                            isSelected ? 'bg-white/[0.06]' : ''
                          }`}
                        >
                          <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${
                            cat === 'conglomerate' ? 'bg-purple-500/20' :
                            cat === 'sovereign' ? 'bg-emerald-500/20' :
                            'bg-accent/20'
                          }`}>
                            <span className={`text-[10px] font-bold ${
                              cat === 'conglomerate' ? 'text-purple-300' :
                              cat === 'sovereign' ? 'text-emerald-300' :
                              'text-accent'
                            }`}>{c.initials}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[12px] font-medium text-[#E0E0E4] truncate block">
                              {c.shortName}
                            </span>
                            <span className="text-[10px] text-[#6B6B73] truncate block">
                              {c.industry} · {c.revenue}
                            </span>
                          </div>
                          {isSelected && (
                            <Check className="w-3 h-3 text-accent flex-shrink-0" strokeWidth={2.5} />
                          )}
                        </button>
                        {subEntities.map((sub) => {
                          const isSubSelected = sub.id === company.id;
                          return (
                            <button
                              key={sub.id}
                              type="button"
                              onClick={() => { setCompanyId(sub.id); setDropdownOpen(false); }}
                              className={`w-full flex items-center gap-2 pl-8 pr-3 py-1.5 text-left transition-colors hover:bg-white/[0.06] ${
                                isSubSelected ? 'bg-white/[0.04]' : ''
                              }`}
                            >
                              <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${
                                cat === 'conglomerate' ? 'bg-purple-500/20' :
                                cat === 'sovereign' ? 'bg-emerald-500/20' :
                                'bg-accent/20'
                              }`}>
                                <span className={`text-[8px] font-bold ${
                                  cat === 'conglomerate' ? 'text-purple-300' :
                                  cat === 'sovereign' ? 'text-emerald-300' :
                                  'text-accent'
                                }`}>{sub.initials}</span>
                              </div>
                              <span className="text-[11px] font-medium text-white/80 truncate flex-1">{sub.shortName}</span>
                              {isSubSelected && <Check className="w-3 h-3 text-blue flex-shrink-0" strokeWidth={2.5} />}
                            </button>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Divider ───────────────────────────────── */}
      <div className="mx-5 my-3 h-px bg-white/[0.06]" />

      {/* ── Navigation ────────────────────────────── */}
      <nav className="flex-1 flex flex-col px-3 overflow-y-auto">
        <SectionLabel>Analysis</SectionLabel>
        <div className="flex flex-col gap-0.5">
          {analysisItems.map((item) => (
            <NavItem key={item.to} {...item} onNavClick={onNavClick} />
          ))}
        </div>

        {/* Divider between groups */}
        <div className="mx-2 my-2 h-px bg-white/[0.06]" />

        <SectionLabel>Insights</SectionLabel>
        <div className="flex flex-col gap-0.5">
          {insightsItems.map((item) => (
            <NavItem key={item.to} {...item} onNavClick={onNavClick} />
          ))}
        </div>
      </nav>

    </aside>
  );
}
