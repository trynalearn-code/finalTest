import { Link, useNavigate } from "react-router-dom"
import "./dashboard.css"

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Dashboard</h1>
      <body>
        <button onClick={() => {
          fetch("localhost:3000/api/alerts", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ })
          })

          navigate("/addAlert")
        }}>Add new Alert</button>
        <button onClick={() => {
          //add the fetch here
          navigate("/")}}>Home</button>
        <button onClick={() =>{
          //add the fetch here
          navigate("/auth/register")}}>Register New User</button>
        <button onClick={() => {
          "deleteItems()"
          navigate("/login")
        }}>Logout</button>

      </body >

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