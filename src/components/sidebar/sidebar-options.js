const sidebarOptions = Object.freeze({
  admin: [
    {nombre: 'usuarios', url:'user'},
    {nombre: 'empleados', url:'staff'},
    {nombre: 'parqueaderos', url:'parkings'}
  ],
  staff:[
    {nombre: 'usuarios', url: 'user'},
    {nombre: 'mi parqueadero', url:'my'}
  ] 
})

export {sidebarOptions} 