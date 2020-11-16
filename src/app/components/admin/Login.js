import React, { useState, useEffect } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { useHistory } from "react-router-dom";
import './Login.scss';


const LOGIN = gql`
  query login($email: String!, $password: String!) {
     login(user: { email: $email, password: $password}) {
    userId
    token
    isAdmin
    }
  }
`;


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, {loading, error, data}] = useLazyQuery(LOGIN);
  const history = useHistory();


  useEffect(() => {
    if(data) { 
      const userData = {
        "userId": data.login.userId,
        "token": data.login.token,
        "isAdmin":data.login.isAdmin
      }
      let storedUserInfo = JSON.parse(localStorage.getItem('userInfo'))|| [];
      console.log(storedUserInfo);
      storedUserInfo.push(userData);
      localStorage.setItem('userInfo', JSON.stringify(storedUserInfo)); 
      
      if(userData.isAdmin ===true){
        history.push("/admin");
      }
      else{
        history.push("/home");
      }
    }
  }, [data, history]);

  if(loading) return 'loading...';
  if(error) return `ERROR: ${error.message}`;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
        <h1>Login</h1>
          <form className="form-register"
            onSubmit={e => {
              e.preventDefault();
              login({ variables: { email: email, password: password } });
              
                
              
               
            }}
          >
            <div className="form-input">
              <label htmlFor="exampleInputEmail1">Emailadres</label>
              <input type="email" required
                onChange={e => setEmail(e.target.value)} placeholder="voorbeeld@mail.com" />
            </div>
            <div className="form-input">
              <label htmlFor="exampleInputEmail1">Wachtwoord</label>
              <input type="password" required
                onChange={e => setPassword(e.target.value)} placeholder="wachtwoord" />
            </div>
            <button className="btn" type="submit" >Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;