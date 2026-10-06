import { Link, useNavigate } from "react-router-dom"
import "./dashboard.css"

function Dashboard() {
    const navigate = useNavigate();
    const clear = localStorage.clear()
  return (
    <>
    <h1>Dashboard</h1>
    <body>
          <button onClick={() =>
          navigate("/addAlert")}>Add new Alert</button>
          <button onClick={() =>
          navigate("/")}>Home</button>
          <button onClick={() =>
          navigate("/auth/register")}>Register New User</button>
          <button onClick={() =>
          navigate("/login")}>Logout</button>
          {/* <button onClick= "deleteItems()" >clear</button> */}
    </body>

    <html>
      <script>

      <>
      function deleteItems() {
        localStorage.clear()
      }

      </>
      </script>
      </html>
    </>
  )
}

export default Dashboard