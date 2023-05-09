import { Link } from 'wouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export default function LoginForm({txtUser, txtPass}) {

  return (
    <div className='form'>
      <div className="form-header">
        <div className="titulo">
          <h2>PAR-</h2><h2>KUD</h2>
        </div>
        <div className="links">
          <h4 className='current'><Link to="#">Iniciar sesión</Link></h4>
          <h4><Link to="/register">Registrarse</Link></h4>
        </div>
      </div>
      <div className='form-content'>
        <h3>Ingresar</h3>
        <div className="form-input">
          <label htmlFor="txtEmail"><FontAwesomeIcon icon={faUser} /></label>
          <input ref={txtUser} placeholder="Correo" id="txtEmail" type="email" />
        </div>
        <div className="form-input">
          <label htmlFor="txtPass"><FontAwesomeIcon icon={faLock} /></label>
          <input ref={txtPass} placeholder="Contraseña" id="txtPass" type="password" />
        </div>
      </div>
    </div>
  )
}