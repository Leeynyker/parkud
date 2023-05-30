import RegisterForm from "../forms/register/Register.form"
import CreditCardForm from "../forms/register/CreditCard.form"

export default function NewUser({registerRefs, creditCardRefs, handleSubmit}) {

  return (
    <form className="form-layout" onSubmit={handleSubmit} >
      <div className="form-container register vertical">
        <RegisterForm fromModal={true} refs={registerRefs} />
        <div className="img degraded-black">
          <CreditCardForm refs={creditCardRefs} />
        </div>
      </div>
      <button className='degraded-black'>Registrarse</button>
    </form>
  )
}