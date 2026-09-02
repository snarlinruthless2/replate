export type RoleType = 'business' | 'charity' | 'volunteer';

export interface FormData {
  role: RoleType;
  name: string;
  email: string;
  organization: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StepItem {
  num: string;
  icon: string;
  title: string;
  body: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  desc: string;
}

export interface CharityFeatureItem {
  icon: string;
  label: string;
  desc: string;
}
