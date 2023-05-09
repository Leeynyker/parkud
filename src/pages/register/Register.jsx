import { useRef } from "react";
import RegisterForm from "../../components/forms/register/Register.form"
import CreditCardForm from "../../components/forms/register/CreditCard.form";
import '../styles/forms-inner.css';
import '../styles/forms.css';

export default function Register() {
  const txtUser = useRef(null);
  const txtPass = useRef(null);

  function handleSubmit(e) {
    e.prevent.default();
    const user = txtUser.current.value;
    const pass = txtPass.current.value;
  }

  return (
    <div className="bg single-element">
      <form className="form-layout" onSubmit={handleSubmit} >
        <div className="form-container register">
          <RegisterForm txtUser={txtUser} txtPass={txtPass} />
          <div className="img degraded-black">
            <CreditCardForm />
          </div>
        </div>
        <button className='degraded-black'>Registrarse</button>
      </form>
    </div>
  )
}