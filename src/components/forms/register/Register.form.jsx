import { Link } from 'wouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCar } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function RegisterForm({refs, fromModal = false}) {

  const {nombre, apellido, correo, contrasena, placaVehiculo} = refs;

  return (
    <div className='form'>
      <div className="form-header">
        <div className="parkud">
          <h2>PAR-</h2><h2>KUD</h2>
        </div>
        <div className="links">
          {!fromModal ? <h4><Link to="/login">Iniciar sesión</Link></h4> : null}
          <h4 className='current'><Link to="#">Registrarse</Link></h4>
        </div>
      </div>
      <div className='form-content'>
        <h3>Registro</h3>
        <div className="divided">
          <div className="form-input">
            <label htmlFor="txtNombre"><FontAwesomeIcon icon={faUser} /></label>
            <input required placeholder="Nombre" id="txtNombre" type="text" ref={nombre} />
          </div>
          <div className="form-input">
            <label htmlFor="txtApellido"><FontAwesomeIcon icon={faUser} /></label>
            <input required placeholder="Apellido" id="txtApellido" type="text" ref={apellido} />
          </div>
        </div>
        <div className="form-input">
          <label htmlFor="txtEmail"><FontAwesomeIcon icon={faEnvelope} /></label>
          <input required placeholder="Correo" id="txtEmail" type="email" ref={correo}/>
        </div>
        <div className="form-input">
          <label htmlFor="txtPass"><FontAwesomeIcon icon={faLock} /></label>
          <input required placeholder="Contraseña" id="txtPass" type="password" autoComplete='true'ref={contrasena}/>
        </div>
        <div className="form-input">
          <label htmlFor="txtPlacaVehiculo"><FontAwesomeIcon icon={faCar} /></label>
          <input required placeholder="Placa del vehículo" id="txtPlacaVehiculo" type="text" ref={placaVehiculo}/>
        </div>
      </div>
    </div>
  )
}