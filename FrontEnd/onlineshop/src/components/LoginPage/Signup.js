import { useState } from "react";
import "../../index.css"
import { registerUser,registerAdmin} from "../../services/database-client";

function SignUp({ handleCancelSignUp,isAdmin}) {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [adress, setAdress] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [showHover,setShowHover]=useState(false);
    const [showError,setShowError]=useState(false);
    const [showErrorData,setShowErrorData]=useState(false);
    const [showSuccess,setShowSuccess]=useState(false);
    const onCancelSignUp = () => {
        handleCancelSignUp();
    }

    const checkUserData=()=>{
        if(name && surname && adress && phone && username && password && passwordRepeat && email)
        return verifyPassword(password,passwordRepeat)
        else {
            setShowErrorData(true);
            return false;
        }
    }

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        if (checkUserData()) {
            setShowErrorData(false);
            if(!isAdmin)
            {
            registerUser({name,surname,adress,phone,username,password,isAdmin:true,email})
            .then((res)=>{
                console.log(res.data);
                if(res.data.isOk){
                    
                    handleCancelSignUp();
                }
                else {
                    setShowSuccess(false);
                    setShowErrorData(false);
                    setShowHover(false);
                    setShowError(true);
                }
            })
        }
        else {
            registerAdmin({name,surname,adress,phone,username,password,isAdmin:true,email})
            .then((res)=>{
                console.log(res.data);
                if(res.data.isOk){
                    
                    setShowSuccess(true);
                }
                else {
                    setShowSuccess(false);
                    setShowErrorData(false);
                    setShowHover(false);
                    setShowError(true);
                }
            })
        }
           
        }
       
        
    }

    const verifyPassword = (password, passwordRepeat) => {
        if (password === passwordRepeat)

            return true;
        setShowErrorData(false);
        setShowHover(true);
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
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}></input>
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
            {showHover &&(<div className="border-red-500 bg-red-500 text-left text-white text-center">Parola introdusa nu corespunde</div>)}
            {showError &&(<div className="border-red-500 bg-red-500 text-left text-white text-center">Username deja existent</div>)}
            {showErrorData &&(<div className="border-red-500 bg-red-500 text-left text-white text-center">Toate campurile sunt obligatorii</div>)}
            {showSuccess &&(<div className="border-green-500 bg-green-500 text-left text-white text-center">Admin creat cu success!</div>)}
        </div>
    )

}

export default SignUp;