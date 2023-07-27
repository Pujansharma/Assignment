import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex as="nav" bg="teal.500" p="4" color="white">
      <Box flex="1">
        <Link to="/">
          <Text fontSize="xl" fontWeight="bold">
            My Website
          </Text>
        </Link>
      </Box>
      <Box>
        <Link to="/login">
          <Button variant="ghost" mr="2">
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button colorScheme="teal">Register</Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
