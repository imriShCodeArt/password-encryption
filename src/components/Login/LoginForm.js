import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import bcrypt from "bcryptjs";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";

const LoginForm = (props) => {
  const [values, setValues] = useState({});
  const updateValues = (key, value) => setValues((vals) => ({ ...vals, [key]: value }));

  const Login = () => {
    const getHashedPassword = JSON.parse(window.localStorage.getItem("login")).password;
    console.log(`Hashed password: ${getHashedPassword}`);
    bcrypt.compare(values.password, getHashedPassword, (err, isMatch) => {
      if (err) {
        throw err;
      } else if (!isMatch) {
        console.log("Password dosen't match");
      }else{
        console.log("Password is a match!");
      }
    });
  };

  useEffect(() => {
    // console.log(values);
  }, [values]);

  return (
    <Card component={"form"}>
      <CardHeader title='Login:' />
      <CardContent>
        <Stack spacing={1} direction={"column"}>
          <TextField
            onChange={(e) => updateValues(e.target.name, e.target.value)}
            name='email'
            type={"email"}
            label='Email'
          />
          <TextField
            onChange={(e) => updateValues(e.target.name, e.target.value)}
            name='password'
            type={"password"}
            label='Password'
          />
          <Button fullWidth onClick={Login}>
            Login
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
