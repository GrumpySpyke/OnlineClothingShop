import { useState } from "react";
import "../../index.css"

function LogIn({handleSignIn}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitUser = (event) => {
        event.preventDefault();
        handleSignIn();
        console.log(username, password)
    }

    return (
        <div>
            <form className="book-edit" onSubmit={onSubmitUser} >
                <div>
                    {/* <label />Username:  */}
                    <input className="input" placeholder="Enter username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div>
                    {/* <label />Password:  */}
                    <input className="input" placeholder="Enter password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        style={{ marginTop: 10 }}
                    />
                </div>
                <div>
                    <button className="button is-primary" style={{ width: 150, marginLeft: 27, marginTop: 10 }}>Log in</button>

                </div>
            </form>

        </div >
    )
}

export default LogIn;