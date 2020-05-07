import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/',
    icon: 'home',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Valuation'
  },
  {
    name: 'Orders',
    url: 'orders',
    icon: 'list-alt'
  },
  {
    title: true,
    name: 'Maintenance'
  },
  {
    name: 'Lookups',
    url: 'lookup-types',
    icon: 'binoculars'
  },
  {
    name: 'Administration',
    icon: 'user-plus',
    children: [
      {
        name: 'User management',
        url: 'admin/user-management',
        icon: 'user'
      },
      {
        name: 'Metrics',
        url: 'admin/metrics',
        icon: 'tachometer-alt'
      },
      {
        name: 'Health',
        url: 'admin/health',
        icon: 'heart'
      },
      {
        name: 'Configuration',
        url: 'admin/configuration',
        icon: 'list'
      },
      {
        name: 'API',
        url: 'admin/docs',
        icon: 'book'
      },
      {
        name: 'Logs',
        url: 'admin/logs',
        icon: 'tasks'
      },
      {
        name: 'Audits',
        url: 'admin/audits',
        icon: 'bell'
      }
    ]
  }
];
