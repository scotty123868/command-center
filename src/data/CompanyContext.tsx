import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { ReactNode } from 'react';

const companies = [
  { id: 'meridian', name: 'IndustrialsCo', shortName: 'IndustrialsCo', initials: 'IC', industry: 'Railroad & Infrastructure Construction', employees: 2800, opCos: 7, category: 'conglomerate' as const, parentId: '' as string, accentColor: '#4285F4' },
  { id: 'hcc', name: 'IC Construction Corp', shortName: 'IC Construction', initials: 'CC', industry: 'Rail & Highway Construction', employees: 1200, opCos: 1, category: 'company' as const, parentId: 'meridian', accentColor: '#D97706' },
  { id: 'hrsi', name: 'IC Rail Services', shortName: 'IC Rail Svc', initials: 'RS', industry: 'Railroad Maintenance & Equipment', employees: 380, opCos: 1, category: 'company' as const, parentId: 'meridian', accentColor: '#7C3AED' },
  { id: 'hsi', name: 'IC Testing Services', shortName: 'IC Services', initials: 'TS', industry: 'Ultrasonic Rail Testing', employees: 220, opCos: 1, category: 'company' as const, parentId: 'meridian', accentColor: '#2563EB' },
  { id: 'hti', name: 'IC Technologies', shortName: 'IC Technologies', initials: 'TK', industry: 'Signal & PTC Systems', employees: 310, opCos: 1, category: 'company' as const, parentId: 'meridian', accentColor: '#DC2626' },
  { id: 'htsi', name: 'IC Transit Services', shortName: 'IC Transit', initials: 'TR', industry: 'Passenger Rail Operations', employees: 480, opCos: 1, category: 'company' as const, parentId: 'meridian', accentColor: '#0D9488' },
  { id: 'he', name: 'IC Energy', shortName: 'IC Energy', initials: 'EN', industry: 'Energy Infrastructure', employees: 120, opCos: 1, category: 'company' as const, parentId: 'meridian', accentColor: '#EA580C' },
  { id: 'gg', name: 'IC Environmental LLC', shortName: 'IC Environmental', initials: 'EV', industry: 'Environmental Services', employees: 90, opCos: 1, category: 'company' as const, parentId: 'meridian', accentColor: '#059669' },
  // ─── Other Demo Companies ───────────────────────────────────────────────
  { id: 'northwood', name: 'Northwood Insurance Group', shortName: 'Northwood Insurance', initials: 'NI', industry: 'Insurance', employees: 800, opCos: 1, category: 'company' as const, parentId: '', accentColor: '#8B5CF6' },
  { id: 'pinnacle', name: 'Pinnacle Healthcare Systems', shortName: 'Pinnacle Healthcare', initials: 'PH', industry: 'Healthcare Services', employees: 420, opCos: 1, category: 'company' as const, parentId: '', accentColor: '#EC4899' },
  { id: 'atlas', name: 'Atlas Manufacturing Group', shortName: 'Atlas Manufacturing', initials: 'AM', industry: 'Manufacturing', employees: 2100, opCos: 4, category: 'company' as const, parentId: '', accentColor: '#F59E0B' },
  // ─── Northbridge Industries (Conglomerate) ──────────────────────────────
  { id: 'northbridge', name: 'Northbridge Industries Group', shortName: 'Northbridge Industries', initials: 'NI', industry: 'Diversified Industrial', employees: 42000, opCos: 12, category: 'conglomerate' as const, parentId: '', accentColor: '#1D4ED8' },
  { id: 'nb-aerospace', name: 'Northbridge Aerospace', shortName: 'NB Aerospace', initials: 'NA', industry: 'Aerospace & Defense', employees: 8200, opCos: 1, category: 'conglomerate' as const, parentId: 'northbridge', accentColor: '#6366F1' },
  { id: 'nb-energy', name: 'Northbridge Energy', shortName: 'NB Energy', initials: 'NE', industry: 'Energy & Utilities', employees: 11500, opCos: 1, category: 'conglomerate' as const, parentId: 'northbridge', accentColor: '#F97316' },
  { id: 'nb-financial', name: 'Northbridge Financial Services', shortName: 'NB Financial', initials: 'NF', industry: 'Financial Services', employees: 6200, opCos: 1, category: 'conglomerate' as const, parentId: 'northbridge', accentColor: '#14B8A6' },
  { id: 'nb-health', name: 'Northbridge Health Sciences', shortName: 'NB Health Sciences', initials: 'NH', industry: 'Pharmaceuticals & Biotech', employees: 16100, opCos: 1, category: 'conglomerate' as const, parentId: 'northbridge', accentColor: '#E11D48' },
  // ─── Republic of Estonia (Sovereign) ────────────────────────────────────
  { id: 'estonia', name: 'Republic of Estonia — Digital Government', shortName: 'Republic of Estonia', initials: 'EE', industry: 'Digital Government', employees: 28500, opCos: 8, category: 'sovereign' as const, parentId: '', accentColor: '#0EA5E9' },
  { id: 'ee-finance', name: 'Ministry of Finance', shortName: 'Min. of Finance', initials: 'MF', industry: 'Fiscal Policy & Taxation', employees: 4200, opCos: 1, category: 'sovereign' as const, parentId: 'estonia', accentColor: '#4338CA' },
  { id: 'ee-social', name: 'Ministry of Social Affairs', shortName: 'Min. of Social Affairs', initials: 'MS', industry: 'Healthcare & Social Welfare', employees: 8400, opCos: 1, category: 'sovereign' as const, parentId: 'estonia', accentColor: '#DB2777' },
  { id: 'ee-economic', name: 'Ministry of Economic Affairs', shortName: 'Min. of Economic Affairs', initials: 'ME', industry: 'Trade & Digital Economy', employees: 5200, opCos: 1, category: 'sovereign' as const, parentId: 'estonia', accentColor: '#65A30D' },
  { id: 'ee-ria', name: 'Information System Authority (RIA)', shortName: 'RIA', initials: 'RI', industry: 'Cybersecurity & IT Infrastructure', employees: 480, opCos: 1, category: 'sovereign' as const, parentId: 'estonia', accentColor: '#0891B2' },
];

const validIds = new Set(companies.map(c => c.id));

type Company = typeof companies[number];

interface CompanyContextType {
  company: Company;
  companies: Company[];
  setCompanyId: (id: string) => void;
}

const CompanyContext = createContext<CompanyContextType | null>(null);

export function CompanyProvider({ children }: { children: ReactNode }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramCompany = searchParams.get('company');
  const initialId = paramCompany && validIds.has(paramCompany) ? paramCompany : 'meridian';

  const [selectedId, setSelectedId] = useState(initialId);
  const company = companies.find(c => c.id === selectedId) || companies[0];

  // Sync URL param when company changes
  const setCompanyId = useCallback((id: string) => {
    setSelectedId(id);
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      if (id === 'meridian') {
        next.delete('company');
      } else {
        next.set('company', id);
      }
      return next;
    }, { replace: true });
  }, [setSearchParams]);

  // Sync state from URL on initial load or URL change
  useEffect(() => {
    const urlCompany = searchParams.get('company');
    if (urlCompany && validIds.has(urlCompany) && urlCompany !== selectedId) {
      setSelectedId(urlCompany);
    }
  }, [searchParams]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <CompanyContext.Provider value={{ company, companies, setCompanyId }}>
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  const ctx = useContext(CompanyContext);
  if (!ctx) throw new Error('useCompany must be used within CompanyProvider');
  return ctx;
}
