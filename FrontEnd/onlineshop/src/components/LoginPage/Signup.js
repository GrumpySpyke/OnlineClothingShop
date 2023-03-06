import { useState } from "react";
import "../../index.css"

function SignUp({ handleCancelSignUp }) {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [adress, setAdress] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const onCancelSignUp = () => {
        handleCancelSignUp();
    }

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        if (verifyPassword(password, passwordRepeat)) {
            console.log(name, surname, adress, phone, username, password, passwordRepeat);
        }
        else {
            console.log("nu e buna parola");
        }
        handleCancelSignUp();
    }

    const verifyPassword = (password, passwordRepeat) => {
        if (password === passwordRepeat)
            return true;
        return false;
    }

    return (
        <div>
            <form onSubmit={handleRegisterSubmit}>
                <div>
                    <input style={{ fontSize: 20, marginBottom: 5, marginLeft: 9}}
                        placeholder="Nume"
                        value={name}
                        onChange={(event) => setName(event.target.value)}></input>
                </div>
                <div>
                    <input style={{ fontSize: 20, marginBottom: 5, marginLeft: 9, marginTop: 10 }}
                        placeholder="Prenume"
                        value={surname}
                        onChange={(event) => setSurname(event.target.value)}></input>
                </div>
                <div>
                    <input style={{ fontSize: 20, marginBottom: 5, marginLeft: 9, marginTop: 10 }}
                        placeholder="Adresa"
                        value={adress}
                        onChange={(event) => setAdress(event.target.value)}></input>
                </div>
                <div>
                    <input style={{ fontSize: 20, marginBottom: 5, marginLeft: 9, marginTop: 10 }}
                        type="number"
                        placeholder="Telefon"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}></input>
                </div>
                <div>
                    <input style={{ fontSize: 20, marginBottom: 5, marginLeft: 9, marginTop: 10 }}
                        placeholder="Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}></input>
                </div>
                <div>
                    <input style={{ fontSize: 20, marginBottom: 5, marginLeft: 9, marginTop: 10 }}
                        type="password" placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}></input>
                </div>
                <div>
                    <input style={{ fontSize: 20, marginBottom: 5, marginLeft: 9, marginTop: 10 }}
                        type="password"
                        placeholder="Repeat Password"
                        value={passwordRepeat}
                        onChange={(event) => setPasswordRepeat(event.target.value)}></input>
                </div>
                <div className="mt-2">
                    <button className="button is-primary"
                        style={{ marginLeft: 25, marginTop: 5, width: 200 }}>Register</button>
                </div>
            </form>
            <div>
                <button className="button is-primary"
                    style={{ marginLeft: 25, marginTop: 5, width: 200 }}
                    onClick={onCancelSignUp}>Cancel</button>
            </div>
        </div>
    )

}

export default SignUp;