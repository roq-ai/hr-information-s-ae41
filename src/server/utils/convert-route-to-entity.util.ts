const mapping: Record<string, string> = {
  companies: 'company',
  employees: 'employee',
  'hr-managers': 'hr_manager',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
