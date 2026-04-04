import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { ReactNode } from 'react';

const companies = [
  { id: 'meridian', name: 'IndustrialsCo', shortName: 'IndustrialsCo', initials: 'IC', industry: 'Railroad & Infrastructure Construction', employees: 2800, opCos: 5, category: 'conglomerate' as const, parentId: '' as string, accentColor: '#4285F4' },
  { id: 'hcc', name: 'IC Construction Corp', shortName: 'IC Construction', initials: 'CC', industry: 'Rail & Highway Construction', employees: 1200, opCos: 1, category: 'company' as const, parentId: 'meridian', accentColor: '#D97706' },
  { id: 'hrsi', name: 'IC Rail Services', shortName: 'IC Rail Svc', initials: 'RS', industry: 'Railroad Maintenance & Equipment', employees: 380, opCos: 1, category: 'company' as const, parentId: 'meridian', accentColor: '#7C3AED' },
  { id: 'hsi', name: 'IC Testing Services', shortName: 'IC Services', initials: 'TS', industry: 'Ultrasonic Rail Testing', employees: 220, opCos: 1, category: 'company' as const, parentId: 'meridian', accentColor: '#2563EB' },
  { id: 'hti', name: 'IC Technologies', shortName: 'IC Technologies', initials: 'TK', industry: 'Signal & PTC Systems', employees: 310, opCos: 1, category: 'company' as const, parentId: 'meridian', accentColor: '#DC2626' },
  { id: 'htsi', name: 'IC Transit Services', shortName: 'IC Transit', initials: 'TR', industry: 'Passenger Rail Operations', employees: 480, opCos: 1, category: 'company' as const, parentId: 'meridian', accentColor: '#0D9488' },
  // ─── Other Demo Companies ───────────────────────────────────────────────
  { id: 'northwood', name: 'Northwood Insurance Group', shortName: 'Northwood Insurance', initials: 'NI', industry: 'Insurance', employees: 10000, opCos: 1, category: 'company' as const, parentId: '', accentColor: '#8B5CF6' },
  { id: 'pinnacle', name: 'Pinnacle Healthcare Systems', shortName: 'Pinnacle Healthcare', initials: 'PH', industry: 'Healthcare Services', employees: 13000, opCos: 1, category: 'company' as const, parentId: '', accentColor: '#EC4899' },
  { id: 'atlas', name: 'Atlas Manufacturing Group', shortName: 'Atlas Manufacturing', initials: 'AM', industry: 'Manufacturing', employees: 2100, opCos: 4, category: 'company' as const, parentId: '', accentColor: '#F59E0B' },
  // ─── Northbridge Industries (Conglomerate) ──────────────────────────────
  { id: 'northbridge', name: 'Northbridge Industries Group', shortName: 'Northbridge Industries', initials: 'NI', industry: 'Diversified Industrial', employees: 42000, opCos: 12, category: 'conglomerate' as const, parentId: '', accentColor: '#1D4ED8' },
  { id: 'nb-aerospace', name: 'Northbridge Aerospace', shortName: 'NB Aerospace', initials: 'NA', industry: 'Aerospace & Defense', employees: 8200, opCos: 1, category: 'conglomerate' as const, parentId: 'northbridge', accentColor: '#6366F1' },
  { id: 'nb-energy', name: 'Northbridge Energy', shortName: 'NB Energy', initials: 'NE', industry: 'Energy & Utilities', employees: 11500, opCos: 1, category: 'conglomerate' as const, parentId: 'northbridge', accentColor: '#F97316' },
  { id: 'nb-financial', name: 'Northbridge Financial Services', shortName: 'NB Financial', initials: 'NF', industry: 'Financial Services', employees: 6200, opCos: 1, category: 'conglomerate' as const, parentId: 'northbridge', accentColor: '#14B8A6' },
  { id: 'nb-health', name: 'Northbridge Health Sciences', shortName: 'NB Health Sciences', initials: 'NH', industry: 'Pharmaceuticals & Biotech', employees: 16100, opCos: 1, category: 'conglomerate' as const, parentId: 'northbridge', accentColor: '#E11D48' },
  // ─── Federative Republic of Brazil (Sovereign) ──────────────────────────
  { id: 'brazil', name: 'Federative Republic of Brazil — Digital Government', shortName: 'Republic of Brazil', initials: 'BR', industry: 'Digital Government & Public Services', employees: 280000, opCos: 8, category: 'sovereign' as const, parentId: '', accentColor: '#0EA5E9' },
  { id: 'br-receita', name: 'Receita Federal — Tax & Revenue', shortName: 'Receita Federal', initials: 'RF', industry: 'Tax Administration & Revenue', employees: 38000, opCos: 1, category: 'sovereign' as const, parentId: 'brazil', accentColor: '#4338CA' },
  { id: 'br-sus', name: 'SUS — Unified Health System', shortName: 'SUS', initials: 'SU', industry: 'Public Healthcare', employees: 72000, opCos: 1, category: 'sovereign' as const, parentId: 'brazil', accentColor: '#DB2777' },
  { id: 'br-bndes', name: 'BNDES — Development Bank', shortName: 'BNDES', initials: 'BN', industry: 'Development Finance', employees: 28000, opCos: 1, category: 'sovereign' as const, parentId: 'brazil', accentColor: '#65A30D' },
  { id: 'br-serpro', name: 'SERPRO — Federal Data Processing', shortName: 'SERPRO', initials: 'SP', industry: 'Government IT & Data Processing', employees: 42000, opCos: 1, category: 'sovereign' as const, parentId: 'brazil', accentColor: '#0891B2' },
  { id: 'br-inss', name: 'INSS — Social Security', shortName: 'INSS', initials: 'IN', industry: 'Social Security & Pensions', employees: 36000, opCos: 1, category: 'sovereign' as const, parentId: 'brazil', accentColor: '#EA580C' },
  { id: 'br-datasus', name: 'DATASUS — Health Informatics', shortName: 'DATASUS', initials: 'DS', industry: 'Health Data & Analytics', employees: 24000, opCos: 1, category: 'sovereign' as const, parentId: 'brazil', accentColor: '#7C3AED' },
  { id: 'br-defesa', name: 'Ministry of Defense — Cyber Command', shortName: 'Cyber Command', initials: 'DC', industry: 'Defense & Cybersecurity', employees: 22000, opCos: 1, category: 'sovereign' as const, parentId: 'brazil', accentColor: '#059669' },
  { id: 'br-anatel', name: 'ANATEL — Telecommunications Agency', shortName: 'ANATEL', initials: 'AT', industry: 'Telecommunications Regulation', employees: 18000, opCos: 1, category: 'sovereign' as const, parentId: 'brazil', accentColor: '#D97706' },
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
