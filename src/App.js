import './App.css';
import { Route } from 'wouter';
import Login from './pages/login/Login';
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
