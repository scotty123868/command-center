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
