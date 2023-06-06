const navBarOptions = {
  Gerente: [
    { name: 'estadisticas', url: '/dashboard/stats' },
    { name: 'administracion', url: '/dashboard/user' }
  ],
  Admin: [
    { name: 'estadisticas', url: '/dashboard/stats' },
    { name: 'administracion', url: '/dashboard/user' }
  ],
  Cliente: [
    { name: 'mi cuenta', url: '/my' },
    { name: 'historial', url: '/history' },
  ]
}

export { navBarOptions }
