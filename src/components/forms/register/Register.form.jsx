import { Link } from 'wouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function RegisterForm({txtUser, txtPass}) {

  return (
    <div className='form'>
      <div className="form-header">
        <div className="titulo">
          <h2>PAR-</h2><h2>KUD</h2>
        </div>
        <div className="links">
          <h4><Link to="/login">Iniciar sesión</Link></h4>
          <h4 className='current'><Link to="#">Registrarse</Link></h4>
        </div>
      </div>
      <div className='form-content'>
        <h3>Registro</h3>
        <div className="divided">
          <div className="form-input">
            <label htmlFor="txtEmail"><FontAwesomeIcon icon={faUser} /></label>
            <input ref={txtUser} placeholder="Nombre" id="txtEmail" type="text" />
          </div>
          <div className="form-input">
            <label htmlFor="txtApellido"><FontAwesomeIcon icon={faUser} /></label>
            <input ref={txtPass} placeholder="Apellido" id="txtApellido" type="text" />
          </div>
        </div>
        <div className="form-input">
          <label htmlFor="txtEmail"><FontAwesomeIcon icon={faEnvelope} /></label>
          <input ref={txtPass} placeholder="Correo" id="txtEmail" type="email" />
        </div>
        <div className="form-input">
          <label htmlFor="txtPass"><FontAwesomeIcon icon={faLock} /></label>
          <input ref={txtPass} placeholder="Contraseña" id="txtPass" type="password" />
        </div>
      </div>
    </div>
  )
}