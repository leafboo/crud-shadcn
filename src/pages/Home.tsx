import { Link } from "react-router"

export default function() {
  return (
    <>
      <div>Home page</div>
      <br />

      <nav>
        <Link to="/auth/login">Login</Link><br />
        <Link to="/auth/logout">Logout</Link><br />
        <Link to="/dashboard">Dashboard</Link><br />
        <Link to="/logs">Logs</Link>
      </nav>
    </>
  )
}