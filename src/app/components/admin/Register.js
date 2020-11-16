import React, { useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from "react-router-dom";


import './Register.scss';

const REGISTER = gql`
  mutation register($email: String!, $password: String!) {
    register(user: { email: $email, password: $password }) {
      id
    }
  }
`;

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, { data }] = useMutation(REGISTER); 

  const history = useHistory();

  
  useEffect(() => {
    if(data) { console.log(data); }
  }, [data]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
        <h1>Registreer je hier</h1>
          <form className="form-register"
            onSubmit={e => {
              e.preventDefault();
              register({ variables: { email: email, password: password } });
              history.push('/auth/sigin');
            }}
            
          >
            <div className="form-input">
              <label htmlFor="exampleInputEmail1">Emailadres</label>
              <input type="email" required
                onChange={e => setEmail(e.target.value)} placeholder="voorbeeld@mail.com"/>
            </div>
            <div className="form-input">
              <label htmlFor="exampleInputEmail1">Wachtwoord</label>
              <input type="password" required
                onChange={e => setPassword(e.target.value)} placeholder="wachtwoord"/>
            </div>
            <button className="btn" type="submit">Registreer</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;