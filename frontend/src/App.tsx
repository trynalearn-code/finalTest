import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import AddAlert from "./addAlert"
import AlertList from "./AlertList";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addAlert" element={<AddAlert/>} />
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
