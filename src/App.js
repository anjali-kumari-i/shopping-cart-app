import { Fragment, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
// import './App.css'

function App() {
  const [user, setUser] = useState({});
  const [IsSignedIn, setIsSignedIn] = useState(false);

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    setIsSignedIn(true);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    setIsSignedIn(false);
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "1024960509808-6rqdknpet2odqdf16mu86tvh6folv7d4.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    // google.accounts.id.prompt();
  }, []);

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="App">
      {!IsSignedIn && (
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            margin: "auto",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            height: "100vh",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Sign In</h1>
          <div id="signInDiv"></div>
        </div>
      )}
      {IsSignedIn && (
        <div>
          <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            {/* <button className= 'button' >Sign Out</button> */}
            <Header
              onShowCart={showCartHandler}
              handleSignOut={handleSignOut}
            />
            <main>
              <Meals />
            </main>
          </CartProvider>
        </div>
      )}
    </div>
  );
}

export default App;
