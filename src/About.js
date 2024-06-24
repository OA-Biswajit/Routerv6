import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate =useNavigate()
  const goTocontact = () => {
    navigate("/Contact")
  }
  return (
    <div>
      <h2>About</h2>
      <button onClick={() => goTocontact()}>go to Contact page</button>
      <button onClick={()=>{navigate(-1)}}>go back</button>
    </div>
  );
};

export default About;
