import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import AddAlert from "./addAlert"
import AlertList from "./AlertList";
import Login from "./Login";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addAlert" element={<AddAlert/>} />
            <Route path="/login" element={<Login/>}/>
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

  

export default App
