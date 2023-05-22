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
  user: [
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
  ],
  parkings: [
    ['Parquedero 1', '100', '80%', '$6000/h'],
    ['Parquedero 2', '100', '80%', '$6000/h'],
    ['Parquedero 3', '100', '80%', '$6000/h'],
    ['Parquedero 4', '100', '80%', '$6000/h'],
    ['Parquedero 5', '100', '80%', '$6000/h'],
    ['Parquedero 6', '100', '80%', '$6000/h']
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
  user: [
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
  ],
  parkings: [
    'nombre',
    'capacidad',
    'ocupación',
    'tarifa',
    'acciones'
  ]
}

const userActions = {
  staff: ['editar', 'eliminar'],
  user: ['editar', 'eliminar'],
  my: ['editar'],
  parkings: ['editar', 'eliminar']
}


export { usersTest, userColumns, userActions }