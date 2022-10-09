import React, {useState} from 'react'

const Login = () => {

    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[SignUp,setSignUp]=useState(false)

    const handleNameChange=(e)=>{
      //console.log(e.target.value)
      setName(e.target.value)
    }
    const handleEmailChange=(e)=>{
      // console.log("email")
      setEmail(e.target.value)
    }
    const handlePassword =(e)=>{
      // console.log("password")
      setPassword(e.target.value)
    }
    const handleSignUp=()=>{
      // console.log("button")
      if(name!==""){
        setSignUp(true)
      }else{
        alert("Name should not be empty")
      }
    }
  return (
    <div className='container'>
       <div className="card bg-info w-50 m-auto">
            <div className="card-body">
                <h6>Login Form</h6>
                <input type="text"className='form-control my-3' placeholder='Enter your name'onChange={(e)=>handleNameChange(e)} />
                <input type="email" className='form-control my-3' placeholder='Enter your Email'onChange={(e)=>handleEmailChange(e)} />
                <input type="password" className='form-control my-3' placeholder='Enter your password'onChange={(e)=>handlePassword(e)} />
                <button className='btn btn-warning my-3' onClick={handleSignUp}>Login</button>
            </div>
        </div> 
    {SignUp&& <div>
        <div> Name :  {name}</div>
        <div> Email : {email}</div>
        <div> Password  : {password}</div>
        </div>
}
    </div>
  )
}

export default Login;