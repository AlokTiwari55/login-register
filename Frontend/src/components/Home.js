import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import './Home.css';

const Home = (props) => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userGender, setGender] = useState("");
  const [userDob, setUserDob] = useState("");


  const handleFirstNameChange = e => {
    setUserFirstName(e.target.value)
  }
  const handleLastNameChange = e => {
    setUserLastName(e.target.value)
  }
  const handleEmailChange = e => {
    setUserEmail(e.target.value)
  }
  const handlePasswordChange = e => {
    setUserPassword(e.target.value)
  }
  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value)
  }
  const handleNumberChange = e => {
    setUserNumber(e.target.value)
  }
  const handleGender = e => {
    setGender(e.target.value)
  }
  const handleDob = e => {
    setUserDob(e.target.value)
  }
  const register = () => {
    const user = {
      firstName: userFirstName,
      lastName: userLastName,
      email: userEmail,
      password: userPassword,
      confirmPassword: confirmPassword,
      number: userNumber,
      dob: userDob,
      gender: userGender
    }
    if (user) {
      if (userPassword === confirmPassword) {
        axios.post("http://localhost:5000/home", user)
          .then(res => alert(res.data.message))
      } else {
        alert("Password didn't matched ")
      }
    } else {
      alert("Invalid")
    }
  }

  const getData = () => {
    axios.get('http://localhost:5000/home')
      .then((res) => {
        const data = res.data;
        console.log(data)
        alert("Data Recieved")
      })
      .catch(() => {
        alert("Error")
      })
  }

  const handleClick = () => {
    alert("Use Form to Sign In");
  }

  return (
    <div>
      <div className='google'> <button onClick={handleClick}  class="btn btn-lg btn-block btn-primary"
        type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button><br></br>
      </div>
      <button onClick={handleClick} class="btn btn-lg btn-block btn-primary mb-2" className='fb-clour'
        type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>
      <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">Or</p>
          </div>
      <hr></hr>
      <form>
        <h2>Create an Account</h2>
        <div className='control-group'>
          <div className='group-control'>
            <div className='form-control'>
              <label htmlFor='name'>First Name</label><br></br>
              <input type='text' id='name' value={userFirstName} onChange={handleFirstNameChange} />
            </div>
            <div className='form-control'>
              <label htmlFor='name'>Last Name</label><br></br>
              <input type='text' id='name' value={userLastName} onChange={handleLastNameChange} />
            </div>
            <div className='form-control'>
              <label htmlFor='name'>E-Mail</label><br></br>
              <input type='text' id='name' value={userEmail} onChange={handleEmailChange} />
            </div>
            <div className='form-control'>
              <label htmlFor='name'>Password</label><br></br>
              <input type='text' id='name' value={userPassword} onChange={handlePasswordChange} />
            </div>
            <div className='form-control'>
              <label htmlFor='name'>Confirm Password</label><br></br>
              <input type='text' id='name' value={confirmPassword} onChange={handleConfirmPasswordChange} />
            </div>
            <div className='form-control'>
              <label htmlFor='name'>Mobile No.</label><br></br>
              <input type='text' id='name' value={userNumber} onChange={handleNumberChange} />
            </div>
            <div>
              <div className='form-control'>
                <label htmlFor='name'>D.O.B</label><br></br>
                <input type='text' id='name' value={userDob} onChange={handleDob} />
              </div>
              <div className='form-control'>
                <label htmlFor='name'>Gender</label><br></br>
                <input type='text' id='name' value={userGender} onChange={handleGender} />
              </div>
            </div>
            <div>
              <button onClick={register}>Create Account</button>
            </div>
          </div>

          <div className='route-link'>
            <p>Already have an account?</p>
            <Link class="nav-link" to="/login">Login</Link>

          </div>
        </div>
        {/* <div className='control-group'>
          <div className='form-control'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' value={user.name} onChange={handleChange}/>
          </div>
          
        <div className='form-actions'>
          <button onChange={register}>Submit</button>
        </div> */}

      </form>
    </div>
  );

};


export default Home;