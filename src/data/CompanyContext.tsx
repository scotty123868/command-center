import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

const companies = [
  { id: 'meridian', name: 'Herzog Companies', shortName: 'Herzog Companies', initials: 'H', industry: 'Railroad & Infrastructure Construction', employees: 2800, opCos: 7, category: 'conglomerate' as const, parentId: '' as string, accentColor: '#4285F4' },
  { id: 'hcc', name: 'Herzog Contracting Corp', shortName: 'Herzog Contracting', initials: 'HC', industry: 'Rail & Highway Construction', employees: 1200, opCos: 1, category: 'company' as const, parentId: 'meridian', accentColor: '#D97706' },
  { id: 'hrsi', name: 'Herzog Railroad Services', shortName: 'Herzog Railroad Svc', initials: 'HR', industry: 'Railroad Maintenance & Equipment', employees: 380, opCos: 1, category: 'company' as const, parentId: 'meridian', accentColor: '#7C3AED' },
  { id: 'hsi', name: 'Herzog Services (Rail Testing)', shortName: 'Herzog Services', initials: 'HS', industry: 'Ultrasonic Rail Testing', employees: 220, opCos: 1, category: 'company' as const, parentId: 'meridian', accentColor: '#2563EB' },
  { id: 'hti', name: 'Herzog Technologies', shortName: 'Herzog Technologies', initials: 'HT', industry: 'Signal & PTC Systems', employees: 310, opCos: 1, category: 'company' as const, parentId: 'meridian', accentColor: '#DC2626' },
  { id: 'htsi', name: 'Herzog Transit Services', shortName: 'Herzog Transit', initials: 'TS', industry: 'Passenger Rail Operations', employees: 480, opCos: 1, category: 'company' as const, parentId: 'meridian', accentColor: '#0D9488' },
  { id: 'he', name: 'Herzog Energy', shortName: 'Herzog Energy', initials: 'HE', industry: 'Energy Infrastructure', employees: 120, opCos: 1, category: 'company' as const, parentId: 'meridian', accentColor: '#EA580C' },
  { id: 'gg', name: 'Green Group LLC', shortName: 'Green Group', initials: 'GG', industry: 'Environmental Services', employees: 90, opCos: 1, category: 'company' as const, parentId: 'meridian', accentColor: '#059669' },
];

type Company = typeof companies[number];

interface CompanyContextType {
  company: Company;
  companies: Company[];
  setCompanyId: (id: string) => void;
}

const CompanyContext = createContext<CompanyContextType | null>(null);

export function CompanyProvider({ children }: { children: ReactNode }) {
  const [selectedId, setSelectedId] = useState('meridian');
  const company = companies.find(c => c.id === selectedId) || companies[0];

  return (
    <CompanyContext.Provider value={{ company, companies, setCompanyId: setSelectedId }}>
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  const ctx = useContext(CompanyContext);
  if (!ctx) throw new Error('useCompany must be used within CompanyProvider');
  return ctx;
}
