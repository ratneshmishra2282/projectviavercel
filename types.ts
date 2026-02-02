
export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'it' | 'consultancy' | 'development';
}

export interface PageContent {
  heroTitle: string;
  heroSubtitle: string;
  aboutText: string;
  vision: string;
  mission: string;
}

export interface CloudConfig {
  fileId?: string;
  lastSync?: string;
  isEnabled: boolean;
}

export interface AppState {
  services: Service[];
  content: PageContent;
  isLoggedIn: boolean;
  cloudConfig: CloudConfig;
}

export enum RoutePath {
  HOME = '/',
  ABOUT = '/about',
  SERVICES = '/services',
  CONTACT = '/contact',
  ADMIN_LOGIN = '/admin/login',
  ADMIN_DASHBOARD = '/admin/dashboard'
}
