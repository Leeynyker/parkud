import { Modal, Header } from "semantic-ui-react";
import RegisterForm from "../forms/register/Register.form";
import CreditCardForm from "../forms/register/CreditCard.form";
import { useState, useRef } from "react";
import useFetchAPI from "../../hooks/fetchAPI";

import '../../pages/styles/forms-inner.css';
import '../../pages/styles/forms.css';

export default function RegisterModal() {
  const [open, setOpen] = useState(false);

  const nombre = useRef('');
  const apellido = useRef('');
  const correo = useRef('');
  const contrasena = useRef('');
  const numTarjeta = useRef('');
  const vencimiento = useRef('');
  const cvc = useRef('');
  const placaVehiculo = useRef('');
  const { registerUser } = useFetchAPI();

  function handleSubmit(e) {
    e.preventDefault();
    const datos = {
      usuario: {
        nombres: `${nombre.current.value} ${apellido.current.value}`,
        username: correo.current.value,
        password: contrasena.current.value,
        enabled: true,
        placaVehiculo: placaVehiculo.current.value,
        puntosAcumulados: 0,
        rol: {
          rolId: 2,
          nombreRol: 'User'
        }
      },
      tarjetaDeCredito: [
        {
          numeroTarjeta: numTarjeta.current.value,
          fechaVencimiento: vencimiento.current.value,
          codigoSeguridad: cvc.current.value
        }
      ]
    }

    registerUser(datos);
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size={'small'}
      trigger={<button className='add-user'>Agregar Usuario</button>}>
      <Header>
        Registrar usuario
      </Header>
      <Modal.Content>
        <>
          <form className="form-layout" onSubmit={handleSubmit} >
            <div className="form-container register vertical">
              <RegisterForm fromModal={true} refs={{ nombre, apellido, correo, contrasena, placaVehiculo }} />
              <div className="img degraded-black">
                <CreditCardForm refs={{ numTarjeta, vencimiento, cvc }} />
              </div>
            </div>
            <button className='degraded-black'>Registrarse</button>
          </form>
        </>
      </Modal.Content>
    </Modal>
  )
}
