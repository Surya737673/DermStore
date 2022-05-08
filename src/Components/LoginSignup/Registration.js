import React, { useState } from "react";
import Login from './Login'
import { Alert } from "react-bootstrap";

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
   
  
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    function handleFormSubmit(e) {
        e.preventDefault();
    
        if (!name || !email || !password || !phone) {
          setFlag(true);
        } else {
          setFlag(false);
          localStorage.setItem("sanskarEmail", JSON.stringify(email));
          localStorage.setItem(
            "sanskarPassword",
            JSON.stringify(password)
          );
          console.log("Saved in Local Storage");
    
          setLogin(!login);
        }
      }
    
      function handleClick() {
        setLogin(!login);
      }

      return (
        <>
     
            <div className="main">
              {" "}
              {login ? (
                <form className="formm" onSubmit={handleFormSubmit}>
                  <h3>About You</h3>
                  <hr />
                  <h4>Sign Up With</h4>
                 <div  style={{display:"flex"}}><img style={{paddingLeft:"20px"}} src={"https://img.icons8.com/color-glass/2x/gmail-login.png"} alt="" />
                 <div><img style={{paddingLeft:"70px"}} src={"https://img.icons8.com/color/2x/facebook-new.png"} alt="" /></div>
                 </div>
                 <hr />
                 <h4>Or create your email account</h4>

             
    
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Full Name"
                      name="name"
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>
    
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                 
                />
                <label style={{color:"grey", fontSize:"10px"}}>Include a minimum of 6 characters, and contain at least 1 number</label>
              </div>

              <div className="form-group">
                <label>Phone No.</label>
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

              

              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Continue
              </button>
            
              <p onClick={handleClick} className="forgot-password text-right">

                By proceeding, you are confirming that you agree to our Terms and Conditions and Privacy Policy
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </form>
          ) : (
            <Login/>
          )}
        </div>
    
    </>
  );
}

export default Registration;