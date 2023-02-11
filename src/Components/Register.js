import React,{useState} from 'react'
import Axios from "axios"

export default function Register() {
    const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [registerStatus, setRegisterStatus] = useState("");

  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/register", {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
      // setRegisterStatus(response);
      console.log(response);
      
        setRegisterStatus("account created");
      
    })
  }

  return (
    <div>
    <div className='container' style={{background:"#CBD6E2"}}>
         <div className="loginForm text-center">
        <form >
          <h4>Register Here</h4>
          <label htmlFor="email">Email Address*</label><br/>
          <input className="textInput" type="text" name="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter your Email Address" required /><br/><br/>
          <label htmlFor="username">Username*</label><br/>
          <input className="textInput" type="username" name="username" onChange={(e) => {setUsername(e.target.value)}} placeholder="Enter your Username" required /><br/><br/>
          <label htmlFor="password">Password*</label><br/>
          <input className="textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your Password" required /><br/><br/>
          <input className="btn btn-outline-success" type="submit" onClick={register} value="Create an account" /><br/>
          <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1><br/><br/>
        </form>
      </div>
    </div>
    </div>
      
   
  )
}
