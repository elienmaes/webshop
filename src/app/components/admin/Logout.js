import React from 'react'
import { useHistory } from "react-router-dom";

 function Logout() {
  const history = useHistory();
  localStorage.removeItem('userInfo');
  history.push("/home");

  return (
    <div>
   
    </div>
  )
};
export default Logout;