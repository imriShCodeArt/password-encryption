import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import RegisterForm from "../Register/RegisterForm";
import LoginForm from "../Login/LoginForm";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

const Welcome = (props) => {
  const [element, setElement] = useState(<></>);
  const [login, setLogin] = useState(0);

  const handleClick = (e) => {
    const val = Math.floor(e.target.value);
    setLogin(val);
  };

  useEffect(() => {
    login === 1 ? setElement(<LoginForm />) : setElement(<RegisterForm />);
    console.log(login);
  }, [login]);
  return (
    <>
      <ToggleButtonGroup exclusive onChange={handleClick} value={login}>
        <ToggleButton value={0}>Register</ToggleButton>
        <ToggleButton value={1}>Login</ToggleButton>
      </ToggleButtonGroup>
      {element}
    </>
  );
};

Welcome.propTypes = {};

export default Welcome;
