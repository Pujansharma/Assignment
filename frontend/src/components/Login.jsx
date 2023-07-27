import React, { useState } from "react";
import { Heading, Input, Button } from "@chakra-ui/react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post("http://localhost:4600/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Heading>Login</Heading>
      <br />
      <Heading>Email</Heading>
      <Input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        htmlSize={25}
        width="auto"
      />
      <Heading>Password</Heading>
      <Input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        htmlSize={25}
        width="auto"
      />
      <br />
      <br />
      <Button onClick={handleLogin}>Login</Button>
    </>
  );
};

export default Login;
