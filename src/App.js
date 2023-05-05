import './App.css';
import { Route } from 'wouter';
import Login from './pages/login/Login';

function App() {
  return (
    <>
      <Route path='/home'></Route>
      <Route path='/login'><Login /></Route>
      <Route path='/register'></Route>
    </>
  );
}

export default App;
