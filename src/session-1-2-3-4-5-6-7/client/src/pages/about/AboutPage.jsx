import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AboutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goForward = () => {
    navigate(1);
  };

  const nav = (path) => {
    navigate(path);
  };

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1> About | faqs</h1>

      <button onClick={() => nav("/home")}>Go to Home</button>
      <button onClick={() => goBack()}>Go back</button>
      <button onClick={goForward}>Go forward</button>
    </div>
  );
};

export default AboutPage;
