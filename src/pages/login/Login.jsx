import LoginForm from "../../components/forms/login/Login.form"
import '../styles/forms-inner.css';
import '../styles/login.css';

export default function Login() {

  return (
    <div className="bg single-element">
      <div className="form-container">
        <LoginForm />
        <div className="img degraded">

        </div>
      </div>
    </div>
  )
}