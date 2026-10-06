import { useEffect, useState } from "react"
import "./login.css"

function Login() {
    // function saveLogin(){
    //     const [save, setSave] = useState(()=>{
    //         const storedSave = localStorage.getItem("save")
    //         return storedSave ? parseInt(storedSave):0
    //     })
    //     useEffect(()=>{
    //         localStorage.setItem("save", save.toString())
    //     },[save])
    //     const saves = ()=>{
    //         setSave(save=>save)
        // }
    // }
    return (
        <div>
           
                
            <h1>Login</h1>
            <form>
                <b>Username</b>
                <input type="text"
                    placeholder="Enter your username"
                    name="username" required />

                <b>Password</b>
                <input type="password"
                    placeholder="Enter your password"
                    name="password" required />

                <button type="submit" id="setBtn">Login</button>
            </form>
          


        </div>
    )  
}
        // const userInput = document.getElementById("user");


        // document.getElementById("setBtn").addEventListener("click", () => {
        //     localStorage.setItem(
        //         userInput.value,
        //     );
        // });



export default Login
