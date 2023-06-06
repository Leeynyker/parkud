import './App.css';
import { Route } from 'wouter';
import Login from './pages/login/Login';
import Stats from './pages/stats/Stats';
import Register from './pages/register/Registrar';
import Home from './pages/home/Home';
import AdminDashboard from './pages/admin-dashboard/AdminDashboard'
import ParkingLot from './pages/parking/ParkingLot';
import { LoggedContextProvider } from './context/Logged.context';
import { AdminRequired, UserRequired } from './components/auth-required/authRequired';

function App() {
  return (
    <>
      <LoggedContextProvider>

        <Route path='/'>
          <UserRequired>
            <Home />
          </UserRequired>
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/stats'>
          <AdminRequired>
            <Stats />
          </AdminRequired>
        </Route>
        <Route path='/dashboard/:toShow'>
          {params =>
            <AdminRequired>
              <AdminDashboard toShow={params.toShow} />
            </AdminRequired>}
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
