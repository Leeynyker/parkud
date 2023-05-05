import { useRef } from 'react';
import { Link } from 'wouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export default function LoginForm() {

  const txtUser = useRef(null);
  const txtPass = useRef(null);

  function handleSubmit(e) {
    e.prevent.default();
    const user = txtUser.current.value;
    const pass = txtPass.current.value;
  }

  return (
    <div className="form">
      <div className="form-header">
        <div className="titulo">
          <h2>PAR-</h2><h2>KUD</h2>
        </div>
        <div className="links">
          <h4 className='current'><Link to="#">Iniciar sesión</Link></h4>
          <h4><Link to="#">Registrarse</Link></h4>
        </div>
      </div>
      <form onSubmit={handleSubmit} className='form-content'>
        <h3>Ingresar</h3>
        <div className="form-input">
          <label htmlFor="txtEmail"><FontAwesomeIcon icon={faUser} /></label>
          <input ref={txtUser} placeholder="Correo" id="txtEmail" type="email" />
        </div>
        <div className="form-input">
          <label htmlFor="txtPass"><FontAwesomeIcon icon={faLock} /></label>
          <input ref={txtPass} placeholder="Contraseña" id="txtPass" type="password" />
        </div>
        <button className='degraded'>Iniciar Sesión</button>
        <Link to="#" className='forgot'>Olvidé mi contraseña</Link>
      </form>
    </div>
  )
}