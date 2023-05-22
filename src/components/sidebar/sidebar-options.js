const sidebarOptions = Object.freeze({
  admin: [
    {nombre: 'empleados', url:'staff'},
    {nombre: 'usuarios', url:'user'},
    {nombre: 'parqueaderos', url:'parkings'}
  ],
  staff:[
    {nombre: 'usuarios', url: 'user'},
    {nombre: 'mi parqueadero', url:'my'}
  ] 
})

export {sidebarOptions} 