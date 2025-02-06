import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/authentication/Login';
import Logout from './pages/authentication/Logout';
import Dashboard from './pages/Dashboard';
import Logs from './pages/Logs';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth/login' element={<Login />} />
      <Route path='/auth/logout' element={<Logout />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/logs' element={<Logs />} />
    </Routes>
  )
}

export default App
