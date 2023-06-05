import RegisterForm from "../../components/forms/register/Register.form";
import CreditCardForm from "../../components/forms/register/CreditCard.form";
import "../styles/forms-inner.css";
import "../styles/forms.css";
import { useRef, useState } from "react";
import useFetchAPI from "../../hooks/fetchUsers";
import { useLocation } from "wouter";
import { Button, Message, Modal } from 'semantic-ui-react';
export default function Register() {
  const [location, navigate] = useLocation();

  const nombre = useRef("");
  const apellido = useRef("");
  const correo = useRef("");
  const contrasena = useRef("");
  const numTarjeta = useRef("");
  const vencimiento = useRef("");
  const cvc = useRef("");
  const placaVehiculo = useRef("");
  const { registerUser } = useFetchAPI();
  const errors = {};
  const errorsRef = useRef({})
  const [showModal, setShowModal] = useState(false);

  const validateForm = () => {
    //Correo
    if (!correo.current.value) {
      errors.correo = "El correo electrónico es requerido";
    } else if (!/\S+@\S+\.\S+/.test(correo.current.value)) {
      errors.correo = "Correo electrónico inválido";
      alert(errors.correo);
    }
    //Contraseña
    if (!contrasena.current.value) {
      errors.contrasenia = "La contraseña es requerida";
    } else if (contrasena.current.value.length < 8) {
      errors.contrasenia = "La contraseña debe tener al menos 8 caracteres";
    }
    //Placa
    if (!placaVehiculo.current.value) {
      errors.placa = "La placa de vehículo es requerida";
    } else if (!/^[A-Za-z]{3}-\d{3}$/.test(placaVehiculo.current.value)) {
      errors.placa = "Placa de vehículo inválida";
    }
    // Validación de la tarjeta de crédito
    if (!numTarjeta.current.value) {
      errors.tarjeta = "El número de tarjeta de crédito es requerido";
    } else if (!isValidCreditCard(numTarjeta.current.value)) {
      errors.tarjeta = "Número de tarjeta de crédito inválido";
    }

    // Validación del CVV
    if (!cvc.current.value) {
      errors.cvv = "El CVV es requerido";
    } else if (!/^[0-9]{3,4}$/.test(cvc.current.value)) {
      errors.cvv = "CVV inválido";
    }

    // Validación de la fecha de expiración
    if (!vencimiento.current.value) {
      errors.expiracion = "La fecha de expiración es requerida";
    } else if (!isValidExpirationDate(vencimiento.current.value)) {
      errors.expiracion = "Fecha de expiración inválida";
    }
    return Object.keys(errors).length === 0;
  };
  const isValidCreditCard = (number) => {
    let sum = 0;
    let shouldDouble = false;
    const digits = number.toString().split("").reverse();

    for (let i = 0; i < digits.length; i++) {
      let digit = parseInt(digits[i], 10);

      if (shouldDouble) {
        if ((digit *= 2) > 9) digit -= 9;
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  };

  const isValidExpirationDate = (expirationDate) => {
    const currentDate = new Date();
    const [month, year] = expirationDate.split("/");

    // Verificar si el año actual es menor o igual al año de expiración
    if (parseInt(year, 10) < currentDate.getFullYear()) {
      return false;
    }

    // Si el año de expiración es igual al año actual, verificar si el mes es mayor o igual al mes actual
    if (
      parseInt(year, 10) === currentDate.getFullYear() &&
      parseInt(month, 10) <= currentDate.getMonth() + 1
    ) {
      return false;
    }

    return true;
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      const datos = {
        usuario: {
          nombres: `${nombre.current.value} ${apellido.current.value}`,
          username: correo.current.value,
          password: contrasena.current.value,
          enabled: true,
          placaVehiculo: placaVehiculo.current.value,
          puntosAcumulados: 0,
          rol: {
            rolId: 4,
            nombreRol: "Cliente",
          },
        },
        tarjetaDeCredito: [
          {
            numeroTarjeta: numTarjeta.current.value,
            fechaVencimiento: vencimiento.current.value,
            codigoSeguridad: cvc.current.value,
          },
        ],
      };

      registerUser(datos).then((r) => {
        console.log(r);
        if (r) navigate("/login");
      });
    } else {

      errorsRef.current = errors
      setShowModal(true);
    }
  }

  return (
    <div className="bg single-element">
      <form className="form-layout" onSubmit={handleSubmit}>
        <div className="form-container register">
          <RegisterForm
            refs={{ nombre, apellido, correo, contrasena, placaVehiculo }}
          />
          <div className="img degraded-black">
            <CreditCardForm refs={{ numTarjeta, vencimiento, cvc }} />
          </div>
        </div>
        <button style={{ marginTop: "15px" }} className="degraded-black">
          Registrarse
        </button>
      </form>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Error en el formulario</Modal.Header>
        <Modal.Content>
          <Message negative>
            <Message.Header>Se encontraron errores en el formulario:</Message.Header>
            {Object.keys(errorsRef.current).map((key) => (
              
              <li key={key}>{errorsRef.current[key]}</li>
            ))}
          </Message>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setShowModal(false)}>Cerrar</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
