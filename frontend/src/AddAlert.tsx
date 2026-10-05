import { useState } from "react"
import "./App.css"
import AlertList from "./AlertList"

function AddAlert() {

    const [displayName, setdisplayName] = useState("")
    const [description, setdescription] = useState("")
    const [priority, setpriority] =useState("")
    const [arena, setarena] =useState("")
    const [status, setstatus] =useState("")

    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log(
            displayName,
            description,
            priority,
            arena,
            status
        );
    };


    const handleReset = () => {
        setdisplayName("")
        setdescription("")
        setpriority("")
        setarena("")
        setstatus("")

    };

    return (
        <>
            <h1>Add a New Alert!</h1>
            <div className="addAlert">
                <fieldset>
                    <form action="#" method="get">
                        <label >
                            Display name*
                        </label>
                        <input
                            type="text"
                            name="displayName"
                            id="displayName"
                            value={displayName}
                            onChange={(e) =>
                                setdisplayName(e.target.value)
                            }
                            placeholder="Enter display Name"
                            required
                        />
                        <label >Description*</label>
                        <textarea
                            name="description"
                            id="description"
                            value={description}
                            onChange={(e) =>
                                setdescription(e.target.value)
                            }
                            placeholder="About your self"
                            required
                        ></textarea>

                        <label>Priority</label>
                        <select
                            name="priority"
                            id="priority"
                            value={priority}
                            onChange={(e) =>
                                setpriority(
                                    e.target.value
                                )
                            }
                        >
                            <option
                                value=""
                                disabled
                                selected={priority === ""}
                            >
                                Priority Level
                            </option>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                            <option value="4">Critical</option>
                        </select>

                         <label>Arena</label>
                        <select
                            name="arena"
                            id="arena"
                            value={arena}
                            onChange={(e) =>
                                setarena(
                                    e.target.value
                                )
                            }
                        >
                            <option
                                value=""
                                disabled
                                selected={arena === ""}
                            >
                                Arena 
                            </option>
                            <option value="1">North</option>
                            <option value="2">South</option>
                            <option value="3">Center</option>
                        </select>

                          <label>Status</label>
                        <select
                            name="status"
                            id="status"
                            value={status}
                            onChange={(e) =>
                                setstatus(
                                    e.target.value
                                )
                            }
                        >
                            <option
                                value=""
                                disabled
                                selected={status === ""}
                            >
                                status 
                            </option>
                            <option value="1">Active</option>
                            <option value="2">Handled</option>
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

export default AddAlert