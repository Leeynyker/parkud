import RegisterForm from "../../components/forms/register/Register.form"
import CreditCardForm from "../../components/forms/register/CreditCard.form";
import '../styles/forms-inner.css';
import '../styles/forms.css';
import { useRef } from "react";
import useFetchAPI from "../../hooks/fetchAPI";

export default function Register() {

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
          rolId: 1,
          nombreRol: 'Admin'
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
    <div className="bg single-element">
      <form className="form-layout" onSubmit={handleSubmit} >
        <div className="form-container register">
          <RegisterForm refs={{ nombre, apellido, correo, contrasena, placaVehiculo }} />
          <div className="img degraded-black">
            <CreditCardForm refs={{ numTarjeta, vencimiento, cvc }} />
          </div>
        </div>
        <button className='degraded-black'>Registrarse</button>
      </form>
    </div>
  )
}