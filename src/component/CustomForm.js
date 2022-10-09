import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(" ");
  const [signup, setSignUp] = useState(false);
  const history=useNavigate()

  const handleNameChange = (e) => {
   // console.log("Name", e.target.value);
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handleMobileChange = (e) => {
    //console.log(e.target.value);
    setMobile(e.target.value);
  };

  const handleSignUp = () => {
    if ( name ==="") {
      // alert("Name should not be empty");
    }

    if (email=== "") {
      // alert("Email should not be empty");
    } 
    setSignUp(!signup)
  };
  const handleRouterAssignment=()=>{
    console.log("assignment")
    history("/assignment")
  }
  const handleRouterList=()=>{
    console.log("list")
    history("/list")
  }
  const handleRouterLogin=()=>{
    history("/login")
  }
const handleRouterProduct=()=>{
  history("/product")
}


  return (
    <div className="container-fluid">
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
      <button className="btn btn-primary" onClick={handleRouterAssignment}>Assignment</button>
      <button className="btn btn-info px-5" onClick={handleRouterList}>list</button>
      <button className="btn btn-info px-5" onClick={handleRouterProduct}>Product List</button>

      </div>
      <div className="row justify-content-center my-5">
        <div className="col-sm-5">
          <div className="card bg-info">
            <div className="card-body">
              <input
                type="text"
                className="form-control my-3"
                placeholder="Enter your name"
                onChange={(e) => handleNameChange(e)}
              />
              <input
                type="email"
                className="form-control my-3"
                placeholder="Enter your email"
                onChange={(e) => handleEmailChange(e)}
              />
              <input
                type="text"
                className="form-control my3"
                placeholder="Enter your Mobile"
                onChange={(e) => handleMobileChange(e)}
              />
            If you don't have an accont please sign up
              <button className="btn btn-warning my-3" onClick={handleSignUp}>
                sign Up
              </button>
              <div>
              if you allready have an account Login
              <div>
              <button className="btn btn-warning px-5" onClick={handleRouterLogin}>Login</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {signup ? 
      <div>
      <div>{name.length>0 ? `Name : ${name}`:""}</div>
      <div>{email.length>0 ? `Email : ${email}`:""}</div>
      <div>{mobile.length>0 ? `mob :  ${mobile}`:""} </div>
    </div>
      : ""}       
        
    
    </div>
  );
};

export default CustomForm;
