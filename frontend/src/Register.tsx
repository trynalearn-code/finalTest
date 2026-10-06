import { useState } from "react"
function Register() {
    const [ids, setids] = useState("")
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const [role, setrole] = useState("")
    const [area, setArea] = useState("")

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(
            ids,
            username,
            password,
            email,
            role,
            area
        );
    };


    const handleReset = () => {
        setids("")
        setusername("")
        setpassword("")
        setemail("")
        setrole("")
        setArea("")

    };
    return (
        <>
            <h1>Register New User</h1>
            <div className="addUser">
                <fieldset>
                    <form action="#" method="get">
                        <label >
                            id*
                        </label>
                        <input
                            type="text"
                            name="id"
                            id="id"
                            value={ids}
                            onChange={(e) =>
                                setids(e.target.value)
                            }
                            placeholder="Enter user id"
                            required
                        />
                        <label >username*</label>
                        <input
                            name="username"
                            id="username"
                            value={username}
                            onChange={(e) =>
                                setusername(e.target.value)
                            }
                            placeholder="enter username"
                            required
                        ></input>

                        <label>password*</label>
                        <input
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) =>
                                setpassword(
                                    e.target.value
                                )
                            }
                            required
                        >

                        </input>

                        <label>email</label>
                        <input
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) =>
                                setemail(
                                    e.target.value
                                )
                            }
                        >
                        </input>

                        <label>Role*</label>
                        <select
                            name="role"
                            id="role"
                            value={role}
                            onChange={(e) =>
                                setrole(
                                    e.target.value
                                )
                            }
                        >
                            <option
                                value=""
                                disabled
                                selected={role === ""}
                            >
                                role
                            </option>
                            <option value="1">arena_user</option>
                            <option value="2">general_user</option>
                            <option value="2">admin</option>
                        </select>

                         <label>Assigned Area*</label>
                        <select
                            name="area"
                            id="area"
                            value={area}
                            onChange={(e) =>
                                setrole(
                                    e.target.value
                                )
                            }
                        >
                            <option
                                value=""
                                disabled
                                selected={area === ""}
                            >
                                role
                            </option>
                            <option value="1">North</option>
                            <option value="2">South</option>
                            <option value="2">Center</option>
                            <option value="2">All</option>
                        </select>

                        <button
                            type="reset"
                            value="reset"
                            onClick={() => handleReset()}
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            value="Submit"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Submit
                        </button>
                    </form>
                </fieldset>
            </div>

        </>
    )
}

export default Register