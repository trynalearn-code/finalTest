import "./login.css"

function Login() {

    return (
        <div>
            <body>
                
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
            </body>


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
