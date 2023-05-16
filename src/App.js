import './App.css';
import { Route } from 'wouter';
import Login from './pages/login/Login';
import Register from './pages/register/Registrar';
import HomeAdmin from './pages/home-admin/HomeAdmin';

function App() {
  return (
    <>
      <Route path='/'>
        <HomeAdmin />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/register'><Register /></Route>
    </>
  );
}

export default App;
