import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

const companies = [
  { id: 'meridian', name: 'Herzog Companies', shortName: 'Herzog Companies', initials: 'H', industry: 'Railroad & Infrastructure Construction', revenue: '$800M', employees: 2800, opCos: 7, category: 'company' as const, parentId: '' as string },
  { id: 'oakwood', name: 'Oakwood Insurance Group', shortName: 'Oakwood Insurance', initials: 'O', industry: 'Insurance', revenue: '$400M', employees: 800, opCos: 1, category: 'company' as const, parentId: '' },
  { id: 'pinnacle', name: 'Pinnacle Healthcare', shortName: 'Pinnacle Healthcare', initials: 'P', industry: 'Healthcare Services', revenue: '$95M', employees: 420, opCos: 1, category: 'company' as const, parentId: '' },
  { id: 'atlas', name: 'Atlas Manufacturing', shortName: 'Atlas Manufacturing', initials: 'A', industry: 'Manufacturing', revenue: '$320M', employees: 2100, opCos: 4, category: 'company' as const, parentId: '' },
  { id: 'northbridge', name: 'Northbridge Industries Group', shortName: 'Northbridge Industries', initials: 'N', industry: 'Diversified Industrial', revenue: '$18.2B', employees: 42000, opCos: 12, category: 'conglomerate' as const, parentId: '' },
  { id: 'nb-aerospace', name: 'Northbridge Aerospace', shortName: 'NB Aerospace', initials: 'NA', industry: 'Aerospace & Defense', revenue: '$4.2B', employees: 8200, opCos: 1, category: 'conglomerate' as const, parentId: 'northbridge' },
  { id: 'nb-energy', name: 'Northbridge Energy', shortName: 'NB Energy', initials: 'NE', industry: 'Energy & Utilities', revenue: '$5.1B', employees: 11500, opCos: 1, category: 'conglomerate' as const, parentId: 'northbridge' },
  { id: 'nb-financial', name: 'Northbridge Financial Services', shortName: 'NB Financial', initials: 'NF', industry: 'Financial Services', revenue: '$3.8B', employees: 6200, opCos: 1, category: 'conglomerate' as const, parentId: 'northbridge' },
  { id: 'nb-health', name: 'Northbridge Health Sciences', shortName: 'NB Health Sciences', initials: 'NH', industry: 'Pharmaceuticals & Biotech', revenue: '$5.1B', employees: 16100, opCos: 1, category: 'conglomerate' as const, parentId: 'northbridge' },
  { id: 'estonia', name: 'Republic of Estonia — Digital Government', shortName: 'Republic of Estonia', initials: 'E', industry: 'Digital Government', revenue: '€12.4B budget', employees: 28500, opCos: 8, category: 'sovereign' as const, parentId: '' },
  { id: 'ee-finance', name: 'Ministry of Finance', shortName: 'Min. of Finance', initials: 'MF', industry: 'Fiscal Policy & Taxation', revenue: '€2.8B budget', employees: 4200, opCos: 1, category: 'sovereign' as const, parentId: 'estonia' },
  { id: 'ee-social', name: 'Ministry of Social Affairs', shortName: 'Min. of Social Affairs', initials: 'MS', industry: 'Healthcare & Social Welfare', revenue: '€4.2B budget', employees: 8400, opCos: 1, category: 'sovereign' as const, parentId: 'estonia' },
  { id: 'ee-economic', name: 'Ministry of Economic Affairs', shortName: 'Min. of Economic Affairs', initials: 'ME', industry: 'Trade & Digital Economy', revenue: '€3.1B budget', employees: 5200, opCos: 1, category: 'sovereign' as const, parentId: 'estonia' },
  { id: 'ee-ria', name: 'Information System Authority (RIA)', shortName: 'RIA', initials: 'RI', industry: 'Cybersecurity & IT Infrastructure', revenue: '€120M budget', employees: 480, opCos: 1, category: 'sovereign' as const, parentId: 'estonia' },
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
