import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import AddAlert from "./addAlert"

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

export default App
