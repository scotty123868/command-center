export interface CompanyConfig {
  name: string;
  industry: string;
  employees: number;
  opCos: number;
  techSpend: string;
  aiReadinessScore: number;
  logoInitials: string;
  userInitials: string;
  userName: string;
}

// Default config — Herzog Companies
const defaultConfig: CompanyConfig = {
  name: 'Herzog Companies',
  industry: 'Railroad & Infrastructure Construction',
  employees: 2800,
  opCos: 7,
  techSpend: '$12.4M/yr',
  aiReadinessScore: 38,
  logoInitials: 'H',
  userInitials: 'DD',
  userName: 'Daniel Ducic',
};

// Check URL params for white-label overrides
function getConfigFromUrl(): Partial<CompanyConfig> {
  const params = new URLSearchParams(window.location.search);
  const overrides: Partial<CompanyConfig> = {};
  if (params.get('company')) overrides.name = params.get('company')!;
  if (params.get('industry')) overrides.industry = params.get('industry')!;
  if (params.get('employees')) {
    const n = parseInt(params.get('employees')!, 10);
    if (!isNaN(n)) overrides.employees = n;
  }
  if (params.get('initials')) overrides.logoInitials = params.get('initials')!;
  if (params.get('opCos')) {
    const n = parseInt(params.get('opCos')!, 10);
    if (!isNaN(n)) overrides.opCos = n;
  }
  if (params.get('techSpend')) overrides.techSpend = params.get('techSpend')!;
  if (params.get('userInitials')) overrides.userInitials = params.get('userInitials')!;
  if (params.get('userName')) overrides.userName = params.get('userName')!;
  return overrides;
}

export const config: CompanyConfig = { ...defaultConfig, ...getConfigFromUrl() };
