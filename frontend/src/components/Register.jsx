import React, { useState } from "react";
import { Box, Button, Heading, Input } from "@chakra-ui/react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleRegister = () => {
    axios
      .post("http://localhost:4600/register", {
        email,
        password,
        firstname,
        lastname,
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
      <Heading>Register</Heading>
      <br />
      <Heading>FirstName</Heading>
      <Input
        placeholder="FirstName"
        onChange={(e) => setFirstname(e.target.value)}
        htmlSize={25}
        width="auto"
      />
      <br />
      <Heading>LastName</Heading>
      <Input
        placeholder="LastName"
        onChange={(e) => setLastname(e.target.value)}
        htmlSize={25}
        width="auto"
      />
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
      <Button onClick={handleRegister}>Register</Button>
    </>
  );
};

export default Register;
