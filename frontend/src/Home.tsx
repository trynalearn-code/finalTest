import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();

  return (
      <div>
            <h1>Tzofia</h1>
            <p>The tool that helps you track alerts</p>
            <button onClick={() =>
                 navigate("/addAlert")}>Add new Alert</button>
        </div>
  )
}

export default Home
