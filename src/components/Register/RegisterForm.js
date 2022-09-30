import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import bcrypt from "bcryptjs";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";

const RegisterForm = (props) => {
  const [values, setValues] = useState({});
  const updateValues = (key, value) => setValues((vals) => ({ ...vals, [key]: value }));

  const SignUp = () => {
    const { password, ...rest } = values;
    const hasedPassword = bcrypt.hashSync(password, 10);

    window.localStorage.setItem(
      "login",
      JSON.stringify({ password: hasedPassword, ...rest })
    );
    // window.localStorage.setItem("login", JSON.stringify({ email, hasedPassword }));
  };

  useEffect(() => {
    // console.log(values);
  }, [values]);

  return (
    <Card component={"form"}>
      <CardHeader title='Register New User' />
      <CardContent>
        <Stack spacing={1} direction={"column"}>
          <TextField
            onChange={(e) => updateValues(e.target.name, e.target.value)}
            name='email'
            type={"email"}
            label='Email'
          />
          <Stack spacing={2} direction={"row"} flexGrow={1}>
            <TextField
              sx={{ flexGrow: 1 }}
              onChange={(e) => updateValues(e.target.name, e.target.value)}
              name='firstName'
              type={"text"}
              label='First Name'
            />
            <TextField
              sx={{ flexGrow: 1 }}
              onChange={(e) => updateValues(e.target.name, e.target.value)}
              name='lastName'
              type={"text"}
              label='Last Name'
            />
          </Stack>
          <TextField
            onChange={(e) => updateValues(e.target.name, e.target.value)}
            name='password'
            type={"password"}
            label='Password'
          />
          <Button fullWidth onClick={SignUp}>
            Submit
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
