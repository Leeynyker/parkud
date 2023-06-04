import { useRef } from "react";
import { Link, useLocation } from "wouter";
import LoginForm from "../../components/forms/login/Login.form";
import useFetchAPI from "../../hooks/fetchUsers";
import "../styles/forms-inner.css";
import "../styles/forms.css";
import imagen from "../../img/Parking-amico.png";

export default function Login() {
  const [location, navigate] = useLocation();
  const { getUser, getDataUser } = useFetchAPI();

  const txtUser = useRef(null);
  const txtPass = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const user = txtUser.current.value;
    const pass = txtPass.current.value;

    const datos = {
      username: user,
      password: pass,
    };

    getUser(datos).then((res) => {
      if (res) {
        getDataUser().then((r) => {
          navigate("/");
        });
      }
    });
  }

  return (
    <div className="bg single-element">
      <form className="form-layout" onSubmit={handleSubmit}>
        <div className="form-container login">
          <LoginForm txtUser={txtUser} txtPass={txtPass} />
          <div className="img degraded-orange">
            <div className="container-img">
              <img className="img-park" src={imagen} alt="Imagen parqueadero" />
            </div>
          </div>
        </div>
        <button style={{marginTop: '15px'}} className="degraded-orange">Iniciar Sesión</button>
        <Link to="#" className="forgot">
          Olvidé mi contraseña
        </Link>
      </form>
    </div>
  );
}
