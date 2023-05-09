export default function CreditCardForm() {
  return (
    <div className="container-tarjeta">
      <div className="img-tarjeta">

      </div>
      <div className="form-input">
        <label htmlFor="card-num"></label>
        <input id="card-num" type="text" placeholder="Número de tarjeta"/>
      </div>
      <div className="divided">
        <div className="form-input">
          <label htmlFor="card-num"></label>
          <input id="card-num" type="text" placeholder="EXP"/>
        </div>
        <div className="form-input">
          <label htmlFor="card-num"></label>
          <input id="card-num" type="text" placeholder="CVC"/>
        </div>

      </div>
    </div>
  )
}