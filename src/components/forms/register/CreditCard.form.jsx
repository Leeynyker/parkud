export default function CreditCardForm({refs}) {
  const {numTarjeta, vencimiento, cvc} = refs;

  return (
    <div className="container-tarjeta">
      <div className="img-tarjeta">

      </div>
      <div className="form-input">
        <label htmlFor="card-num"></label>
        <input id="card-num" type="text" placeholder="Número de tarjeta" ref={numTarjeta}/>
      </div>
      <div className="divided">
        <div className="form-input">
          <label htmlFor="card-num"></label>
          <input id="card-num" type="text" placeholder="mm/aa" ref={vencimiento}/>
        </div>
        <div className="form-input">
          <label htmlFor="card-num"></label>
          <input id="card-num" type="text" placeholder="CVC" ref={cvc}/>
        </div>

      </div>
    </div>
  )
}