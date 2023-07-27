import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const Card = ({ ele }) => {
  console.log(ele);

  const handleUpdate = () => {
    let firstname = prompt("enter firstName");
    let lastname = prompt("enter lastName");

    axios
      .patch(`http://localhost:4600/update/${encodeURIComponent(ele._id)}`, {
        firstname,
        lastname,
      })
      
      
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:4600/delete/${encodeURIComponent(ele._id)}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>{ele.email}</h1>
      <h1>{ele.firstname}</h1> <span><h1>{ele.lastname}</h1></span>
      <Button onClick={handleUpdate}>Update</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </>
  );
};

export default Card;
