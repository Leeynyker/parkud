import { Modal, Header } from "semantic-ui-react";
import { useState, useRef, useEffect } from "react";
import useFetchAPI from "../../hooks/fetchUsers";
import NewUser from "./NewUser.modal";

import '../../pages/styles/forms-inner.css';
import '../../pages/styles/forms.css';
import NewParking from "./NewParking.modal";
import NewStaff from "./NewStaff.modal";

export default function RegisterModal({ toShow }) {
  const [open, setOpen] = useState(false);
  const [roleToRegister, setRoleToRegister] = useState({})
  useEffect(()=>{
    if(toShow === 'usuario') setRoleToRegister({
      rolId: 4,
      nombreRol: 'Cliente'
    })
    if(toShow === 'empleado') setRoleToRegister({
      rolId: 1,
      nombreRol: 'Admin'
    })
  },[toShow])

  //Para registrar usuario y personal
  const nombre = useRef('');
  const apellido = useRef('');
  const correo = useRef('');
  const contrasena = useRef('');
  const numTarjeta = useRef('');
  const vencimiento = useRef('');
  const cvc = useRef('');
  const placaVehiculo = useRef('');

  //Para registrar parqueadero
  const nombreParqueadero = useRef('');
  const ciudad = useRef('');
  const direccion = useRef('');
  const tipoServicio = useRef('');
  const horaEntrada = useRef('');
  const horaSalida = useRef('');
  const tarifa = useRef('');
  const cupos = useRef('');
  const fidelizacion = useRef(false);

  //Para registrar empleado
  const parqueaderoAsignado = useRef('');

  const { registerUser } = useFetchAPI();

  function handleSubmit(e) {
    e.preventDefault();
    let datos = {};
    console.log(toShow);
    if (toShow === "usuario") {
      datos = {
        usuario: {
          nombres: `${nombre.current.value} ${apellido.current.value}`,
          username: correo.current.value,
          password: contrasena.current.value,
          enabled: true,
          placaVehiculo: placaVehiculo.current.value,
          puntosAcumulados: 0,
          rol: roleToRegister
        },
        tarjetaDeCredito: [
          {
            numeroTarjeta: numTarjeta.current.value,
            fechaVencimiento: vencimiento.current.value,
            codigoSeguridad: cvc.current.value
          }
        ]
      }
      console.log(datos)
      registerUser(datos);
    }

    if (toShow === 'parqueadero') {
      datos = {
        nombreParqueadero: nombreParqueadero.current.value,
        tipoParqueadero: tipoServicio.current.value,
        horarioServicio: `${horaEntrada.current.value} - ${horaSalida.current.value}`,
        tarifa: tarifa.current.value,
        cantidadDeCupos: cupos.current.value,
        ubicacion:{
          ciudad: ciudad.current.value,
          direccion: direccion.current.value
        }
      }
      console.log(datos);

    }

    if (toShow === 'empleado') {
      datos = {
        usuario: {
          nombres: `${nombre.current.value} ${apellido.current.value}`,
          username: correo.current.value,
          password: contrasena.current.value,
          enabled: true,
          rol: {
            rolId: 1,
            nombreRol: 'Admin'
          }
        }
      }
      console.log(datos);
      registerUser(datos)
    }
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size={'small'}
      trigger={<button className='add-user'>Agregar {toShow}</button>}>
      <Header>
        Registrar {toShow}
      </Header>
      <Modal.Content>
        <>
          {toShow === 'usuario' ? <NewUser
            registerRefs={{ nombre, apellido, correo, contrasena, placaVehiculo }}
            creditCardRefs={{ numTarjeta, vencimiento, cvc }}
            handleSubmit={handleSubmit}
          /> : null}
          {toShow === 'parqueadero' ? <NewParking
            handleSubmit={handleSubmit}
            refs={{
              nombreParqueadero,
              ciudad,
              direccion,
              tipoServicio,
              horaEntrada,
              horaSalida,
              tarifa,
              cupos,
              fidelizacion
            }}
          /> : null}
          { toShow === 'empleado' ? <NewStaff 
          handleSubmit={handleSubmit}
            refs={{ 
              nombre, 
              apellido, 
              correo, 
              contrasena, 
              parqueaderoAsignado
            }}/> 
          : null}
        </>
      </Modal.Content>
    </Modal>
  )
}
