import './App.css';
import { Route } from 'wouter';
import Login from './pages/login/Login';
import RegisterForm from './components/forms/register/Register.form';
import Register from './pages/register/Register';

function App() {
  return (
    <>
      <Route path='/home'></Route>
      <Route path='/login'><Login /></Route>
      <Route path='/register'><Register /></Route>
    </>
  );
}

export default App;
