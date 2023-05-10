import RegisterForm from "../../components/forms/register/Register.form"
import CreditCardForm from "../../components/forms/register/CreditCard.form";
import '../styles/forms-inner.css';
import '../styles/forms.css';

export default function Register() {

  function handleSubmit(e) {
    e.prevent.default();  }

  return (
    <div className="bg single-element">
      <form className="form-layout" onSubmit={handleSubmit} >
        <div className="form-container register">
          <RegisterForm />
          <div className="img degraded-black">
            <CreditCardForm />
          </div>
        </div>
        <button className='degraded-black'>Registrarse</button>
      </form>
    </div>
  )
}