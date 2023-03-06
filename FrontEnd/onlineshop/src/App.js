import SignUp from "./components/LoginPage/Signup";
import LogIn from "./components/LoginPage/Login";
import ProductList from "./components/Tabs/Products/ProductList";
import { useEffect, useState } from "react";
import "./index.css";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/MainPage";

function App() {

  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogIn, setShowLogin] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignUp = () => {
    setShowSignUp(true);
    setShowLogin(false)

  }

  const handleCancelSignUp = () => {
    setShowLogin(true);
    setShowSignUp(false);
  }

  const handleSignIn = () => {
    setShowLogin(false);
    setShowSignUp(false);
    setIsSignedIn(true);
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
    signedInContent = <MainPage onLogOut={handleLogOut} />
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
    <>
      {content}
      {signedInContent}
    </>
  );
}

export default App;
