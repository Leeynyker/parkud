import '../../pages/styles/forms.css'
import '../../pages/styles/forms-inner.css'
import { servicesType } from '../../util/servicesType'

export default function NewParking({ handleSubmit, refs }) {

  const {
    nombreParqueadero,
    ciudad,
    direccion,
    tipoServicio,
    horaEntrada,
    horaSalida,
    tarifa,
    cupos,
    fidelizacion
  } = refs;

  return (
    <form className="form-layout" onSubmit={handleSubmit} >
      <div className="form">
        <div className="form-header">
          <div className="parkud">
            <h2>PAR-</h2><h2>KUD</h2>
          </div>
        </div>
        <div className="form-content">
          <div className="form-input">
            <label htmlFor="nombreParqueadero"></label>
            <input type="text" id='nombreParqueadero' placeholder='Nombre' ref={nombreParqueadero} />
          </div>
          <div className="divided">
            <div className="form-input">
              <label htmlFor="ciudad"></label>
              <input type="text" id='ciudad' placeholder='Ciudad' ref={ciudad} />
            </div>
            <div className="form-input">
              <label htmlFor="direccion"></label>
              <input type="text" id='direccion1' placeholder='Direccion' ref={direccion} />
            </div>
          </div>
          <div className="form-input">
            <select name="tipoServicio" id="tipoServicio" ref={tipoServicio}>
              {servicesType.map((service, index) => <option key={`option${index}`} value={service}>{service}</option>)}
            </select>
          </div>
          <div className="divided">
            <div className="form-input">
              Hora apertura
              <input type="time" name="horaEntrada" id="horaEntrada" ref={horaEntrada} />
            </div>
            <div className="form-input">
              Hora cierre
              <input type="time" name="horaSalida" id="horaSalida" ref={horaSalida} />
            </div>
          </div>
          <div className="divided">
            <div className="form-input">
              <label htmlFor="tarifa"></label>
              <input type="text" id='tarifa' placeholder='Tarifa/minuto' ref={tarifa} />
            </div>
            <div className="form-input">
              <label htmlFor="cupos"></label>
              <input type="text" id='cupos' placeholder='Cupos' ref={cupos} />
            </div>
          </div>
          <div className="divided">
            <div className='form-checkbox'>
              <div>
                <input type="checkbox" name="ofreceFidelizacion" id="ofreceFidelizacion" ref={fidelizacion} />
                <label htmlFor="ofreceFidelizacion">Ofrece puntos de fidelización</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className='degraded-black'>Registrar parqueadero</button>
    </form>
  )
}