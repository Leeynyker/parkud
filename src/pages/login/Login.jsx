import { useRef } from "react";
import { Link } from "wouter";
import LoginForm from "../../components/forms/login/Login.form"
import '../styles/forms-inner.css';
import '../styles/forms.css';

export default function Login() {
  const txtUser = useRef(null);
  const txtPass = useRef(null);

  function handleSubmit(e) {
    e.prevent.default();
    const user = txtUser.current.value;
    const pass = txtPass.current.value;
    console.log(user);
    console.log(pass);
  }

  return (
    <div className="bg single-element">
      <form className="form-layout" onSubmit={handleSubmit} >
        <div className="form-container login">
          <LoginForm txtUser={txtUser} txtPass={txtPass} />
          <div className="img degraded-orange"></div>
        </div>
        <button className='degraded-orange'>Iniciar Sesión</button>
        <Link to="#" className='forgot'>Olvidé mi contraseña</Link>
      </form>
    </div>
  )
}