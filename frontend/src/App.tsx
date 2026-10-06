import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import AddAlert from "./addAlert"
import AlertList from "./AlertList";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addAlert" element={<AddAlert/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/auth/register" element={<Register/>}/>
            <Route path="/auth/dashboard" element={<Dashboard/>}/>
          </Routes>
      </BrowserRouter>

    </>
  )
}

fetch('/api/alerts', {
  method: 'POST',
})
  .then(response => response.json())
  .then(data => {
    <AlertList/>
  });

const url = 'http://localhost:5173/';
const token = 'token';

fetch(url, {
    headers: {
        'Authorization': `Bearer ${token}`
    }
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data received:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
  

export default App
