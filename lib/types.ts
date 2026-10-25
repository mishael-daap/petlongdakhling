export type NavItem = {
  href: string;
  label: string;
};

export type SiteProfile = {
  displayName: string;
  fullName: string;
  roleLine: string;
  stance: string;
  location: string;
  email: string;
  linkedinUrl: string;
  cvPath: string;
  cvAvailable: boolean;
  siteUrl: string;
  nav: NavItem[];
};

export type RecordEntry = {
  title: string;
  org: string;
  period: string;
  place?: string;
  current?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  org: string;
  role: string;
  period: string;
  context: string;
  produced: string[];
};

export type Credential = {
  title: string;
  issuer: string;
  date?: string;
};

export type CredentialGroup = {
  area: string;
  credentials: Credential[];
};

export type Publication = {
  title: string;
  outlet: string;
  date: string;
  url: string;
};

export type EducationEntry = {
  award: string;
  institution: string;
  years?: string;
  logo?: string;
};
