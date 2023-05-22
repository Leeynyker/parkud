const navBarOptions = {
  admin: [
    { name: 'estadisticas', url: '/dashboard/stats' },
    { name: 'reportes', url: '/dashboard/reports' },
    { name: 'administracion', url: '/dashboard/user' }
  ],
  staff: [
    { name: 'estadisticas', url: '/dashboard/stats' },
    { name: 'reportes', url: '/dashboard/reports' },
    { name: 'administracion', url: '/dashboard/user' }
  ],
  user: [
    {name: 'mi cuenta', url:'/my'},
    {name: 'historial', url:'/history'}
  ]
}

export { navBarOptions }
