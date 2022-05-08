import React, { useState } from "react";
import { Home } from "../Home/Home.jsx";
import { Alert } from "react-bootstrap";



function Login() {
    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");
  
    const [flag, setFlag] = useState(false);
  
    const [home, setHome] = useState(true);
  
    function handleLogin(e) {
      e.preventDefault();
      let pass = localStorage
        .getItem("sanskarPassword")
        .replace(/"/g, "");
      let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");
      
  
      if (!emaillog || !passwordlog) {
        setFlag(true);
        console.log("EMPTY");
      } else if (passwordlog !== pass || emaillog !== mail) {
        setFlag(true);
      } else {
        setHome(!home);
        setFlag(false);
      }
    }
  
    return (
      <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '1'}}>
        {home ? (
          <form onSubmit={handleLogin}>
            <h3>Existing Customers</h3>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => setEmaillog(event.target.value)}
              />
            </div>
  
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(event) => setPasswordlog(event.target.value)}
              />
              <label>Forgotten your password?</label>
            </div>
  
            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Login To Your Account
            </button>
  
            {flag && (
              <Alert color="primary" variant="warning">
               Fill correct Info else keep trying.
              </Alert>
            )}
          </form>
        ) : (
          <Home />
        )}
      </div>
    );
  }
  
  export default Login