import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

const companies = [
  { id: 'meridian', name: 'Meridian Industrial Holdings', initials: 'M', industry: 'Industrial Services', revenue: '$340M', employees: 1850, opCos: 4 },
  { id: 'oakwood', name: 'Oakwood Insurance Group', initials: 'O', industry: 'Insurance', revenue: '$400M', employees: 800, opCos: 1 },
  { id: 'pinnacle', name: 'Pinnacle Healthcare', initials: 'P', industry: 'Healthcare Services', revenue: '$95M', employees: 420, opCos: 1 },
  { id: 'atlas', name: 'Atlas Manufacturing', initials: 'A', industry: 'Manufacturing (PE-backed)', revenue: '$320M', employees: 2100, opCos: 4 },
  { id: 'northbridge', name: 'Northbridge Industries Group', initials: 'N', industry: 'Diversified Industrial ($18.2B)', revenue: '$18.2B', employees: 42000, opCos: 12 },
  { id: 'estonia', name: 'Republic of Estonia — Digital Government', initials: 'E', industry: 'Digital Government', revenue: '€12.4B budget', employees: 28500, opCos: 8 },
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
