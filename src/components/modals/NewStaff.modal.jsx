import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons"

export default function NewStaff({refs, handleSubmit}) {
  const {nombre, apellido, correo, contrasena, parqueaderoAsignado} = refs;

  return (
    <form className="form-layout" onSubmit={handleSubmit}>
      <div className="form">
        <div className="form-header">
          <div className="parkud">
            <h2>PAR-</h2><h2>KUD</h2>
          </div>
        </div>
        <div className="form-content">
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
            <input required placeholder="Correo" id="txtEmail" type="email" ref={correo} />
          </div>
          <div className="form-input">
            <label htmlFor="txtPass"><FontAwesomeIcon icon={faLock} /></label>
            <input required placeholder="Contraseña" id="txtPass" type="password" autoComplete='true' ref={contrasena} />
          </div>
          <div className="form-input">
            <select name="parqueadero" id="parqueadero" ref={parqueaderoAsignado}>
              <option value="none">Seleccione un parqueadero</option>
            </select>
          </div>
        </div>
      </div>
      <button className='degraded-black'>Registrar empleado</button>
    </form>
  )
}