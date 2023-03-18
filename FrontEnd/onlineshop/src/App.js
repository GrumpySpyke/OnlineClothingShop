import SignUp from "./components/LoginPage/Signup";
import LogIn from "./components/LoginPage/Login";
import ProductList from "./components/Tabs/Products/ProductList";
import { useEffect, useState } from "react";
import "./index.css";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/MainPage";
import { authenticateUser } from "./services/database-client";

function App() {

  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogIn, setShowLogin] = useState(true);
  const [showHover,setShowHover]=useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [accountData, setAccountData] = useState()
  const handleSignUp = () => {
    setShowSignUp(true);
    setShowLogin(false)

  }

  const handleCancelSignUp = () => {
    setShowLogin(true);
    setShowSignUp(false);
  }

  const handleSignIn = (username, password) => {

    console.log(username, password);
    authenticateUser(username, password)
      .then((res) => {
        setAccountData(res.data);
        console.log(accountData);
        if (res.data.isOk) {
          setShowLogin(false);
          setShowSignUp(false);
          setIsSignedIn(true);
          setShowHover(false);
        }
        else {
          setShowHover(true);
        }
      })

  }

  const handleLogOut = () => {
    setIsSignedIn(false);
    setShowLogin(true);
    setShowSignUp(false);
  }

  let signedInContent = null
  let signUpContent;
  let content;
  let logInContent;

  const setContent = () => {
    content = <div className="app" style={{ display: "grid", justifyContent: "center", alignContent: "center", placeContent: "center" }}>
      <h1>SiteName</h1>
      <div className="app" style={{ display: "grid", justifyContent: "center", alignContent: "center", placeContent: "center", marginTop: 150 }}>

        {logInContent}
        {signUpContent}
      </div>
    </div>
  }

  if (!showLogIn) {
    logInContent = null;
  }

  if (showSignUp) {
    signUpContent = <SignUp handleCancelSignUp={handleCancelSignUp} />
    setContent();
  }

  if (showLogIn) {
    logInContent = <LogIn handleSignIn={handleSignIn} />
    signUpContent = <button className="button is-primary" onClick={handleSignUp} style={{ width: 150, marginTop: 0, marginLeft: 27 }}>SignUp</button>;
    setContent();
  }
  if (isSignedIn) {

    content = null;
    signedInContent = <MainPage onLogOut={handleLogOut} accountData={accountData.userData} />
  }

  // useEffect(() => {
  //   setShowLogin(true);
  //   content = <div className="app" style={{ display: "grid", justifyContent: "center", alignContent: "center", placeContent: "center", marginTop: 250 }}>
  //     <h1>SiteName</h1>
  //     {logInContent}
  //     {signUpContent}
  //   </div>
  // }, isSignedIn)

  return (
    <div>
      {content}
      {showHover &&(<div className="border-red-500 bg-red-500 text-left text-white text-center">User sau parola introduse gresit</div>)}
      {signedInContent}
    </div>
  );
}

export default App;
