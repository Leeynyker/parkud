const navBarOptions = {
  Gerente: [
    { name: 'estadisticas', url: '/dashboard/stats' },
    { name: 'reportes', url: '/dashboard/reports' },
    { name: 'administracion', url: '/dashboard/user' }
  ],
  Admin: [
    { name: 'estadisticas', url: '/dashboard/stats' },
    { name: 'reportes', url: '/dashboard/reports' },
    { name: 'administracion', url: '/dashboard/user' }
  ],
  Cliente: [
    {name: 'mi cuenta', url:'/my'},
    {name: 'historial', url:'/history'},
  ]
}

export { navBarOptions }
