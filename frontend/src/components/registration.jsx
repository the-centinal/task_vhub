import React, { useState } from 'react';
import './reg.css';
import { useNavigate } from 'react-router-dom';


const UserForm = () => {
const [user, setUser] = useState({
  username: "",
  email: "",
  password: "",
});

const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);


  const validateForm = () => {
    const {  email, password } = user;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/;

    // const isUsernameValid = username.trim() !== '';
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);

    setIsValid( isEmailValid && isPasswordValid );
  };
 
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name] : value,
    });
    validateForm();
  }

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      
      const response =  await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })

      console.log(response);
      // const data = response.json()

      if (response.ok) {
        setUser({ 
        username: "",
        email: "",
        password: "",
      });
      navigate("/info");
        
      }

    } catch (error) {
      console.log("onSubmitError", error);
    }


  };

  return (
    <form onSubmit={handleSubmit} style={{flexBasis: "min-content"}}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name='username'
        placeholder='username'
        required
        autoComplete='off'
        value={user.username}
        onChange={handleInput}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name='email'
        placeholder='email'
        required
        autoComplete='off'
        value={user.email}
        onChange={handleInput}
      
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name='password'
        placeholder='password'
        required
        autoComplete='off'
        value={user.password}
        onChange={handleInput}

      />
      <button type="submit" className="btn btn-submit" 
      disabled={!isValid}
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;