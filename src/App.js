import './App.css';
import { Route } from 'wouter';
import Login from './pages/login/Login';
import Register from './pages/register/Registrar';
import Home from './pages/home/Home';
import AdminDashboard from './pages/admin-dashboard/AdminDashboard'
import ParkingLot from './pages/parking/ParkingLot';
import { LoggedContextProvider } from './context/Logged.context';
import { StaffRequired } from './components/auth-required/authRequired';

function App() {
  return (
    <>
      <LoggedContextProvider>

        <Route path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/dashboard/:toShow'>
          {params =>
            <StaffRequired>
              <AdminDashboard toShow={params.toShow} />
            </StaffRequired>}
        </Route>
        <Route path='/my'>
          <h1>My Page</h1>
        </Route>
        <Route path='/history'>
          <h1>My history</h1>
        </Route>
        <Route path='/parking/:parkingId'>
          {params => <ParkingLot parkingId={params.parkingId} />}
        </Route>
      </LoggedContextProvider>

    </>
  );
}

export default App;
