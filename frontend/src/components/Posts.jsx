import React, { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import SingleCard from "./SingleCard";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4600/alluser`)
      .then((res) => setPosts(res.data))
      
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box p="4">
      <Heading>Posts</Heading>
      {/* Add your posts content here */}

      {posts?.map((ele,index) => (
        <SingleCard key={index} ele={ele} />
        
      ))}
    </Box>
  );
};

export default Posts;
