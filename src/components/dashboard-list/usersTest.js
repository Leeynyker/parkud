const usersTest = {
  staff: [
    ['Albert Flores', 'correo@correo.com', 'rol', '-'],
    ['Albert Flores', 'correo@correo.com', 'rol', '-'],
    ['Albert Flores', 'correo@correo.com', 'rol', '-'],
    ['Albert Flores', 'correo@correo.com', 'rol', '-'],
    ['Albert Flores', 'correo@correo.com', 'rol', '-'],
    ['Albert Flores', 'correo@correo.com', 'rol', '-'],
    ['Albert Flores', 'correo@correo.com', 'rol', '-'],
    ['Albert Flores', 'correo@correo.com', 'rol', '-'],
  ],
  users: [
    ['Albert Flores', 'correo@correo.com', '0', 'ABC123'],
    ['Albert Flores', 'correo@correo.com', '0', 'ABC123'],
    ['Albert Flores', 'correo@correo.com', '0', 'ABC123'],
    ['Albert Flores', 'correo@correo.com', '0', 'ABC123'],
    ['Albert Flores', 'correo@correo.com', '0', 'ABC123'],
    ['Albert Flores', 'correo@correo.com', '0', 'ABC123'],
    ['Albert Flores', 'correo@correo.com', '0', 'ABC123'],
  ],
  my: [
    ['Albert Flores', 'A1', 'ABC123', '$6000/h'],
    ['Albert Flores', 'A1', 'ABC123', '$6000/h'],
    ['Albert Flores', 'A1', 'ABC123', '$6000/h'],
    ['Albert Flores', 'A1', 'ABC123', '$6000/h'],
  ]
}



const userColumns = {
  staff: [
    'nombre',
    'correo',
    'rol',
    'parqueadero',
    'acciones'
  ],
  users: [
    'nombre',
    'correo',
    'puntos',
    'placa',
    'acciones'
  ],
  my: [
    'nombre',
    'lugar',
    'placa',
    'tarifa',
    'acciones'
  ]
}

const userActions = {
  staff: ['editar', 'eliminar'],
  users: ['editar', 'eliminar'],
  my: ['editar']
}


export { usersTest, userColumns, userActions }