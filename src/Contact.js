import React from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const Navigate=useNavigate()
  const gobackfunction = () => { 
    Navigate(-1)
  }
  const gotohome = () => {
    Navigate("/")
  }
  return (
    <div>
      <div>Contact</div>
      <button onClick={gotohome}> go to home</button>
      <button onClick={()=>gobackfunction()}>go back</button>
    </div>
  );
};

export default Contact;
