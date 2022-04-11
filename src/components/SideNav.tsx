import { Box, VStack } from "@chakra-ui/react";
import React from "react";

const Nav = ({ activeSection }: { activeSection: number }) => {
  return (
    <VStack
      spacing="15px"
      position="fixed"
      right={{ base: "10px", sm: "20px" }}
      top="50%"
      transform="translateY(-50%)"
      zIndex="10"
    >
      <Box
        as="a"
        href="#section-1"
        w="10px"
        height="10px"
        borderRadius="full"
        bgColor={activeSection === 0 ? "yellow.100" : "white"}
        boxShadow={
          activeSection === 0 ? "0 0 15px rgba(255,255,255,0.95)" : "none"
        }
      />
      <Box
        as="a"
        href="#section-2"
        w="10px"
        height="10px"
        borderRadius="full"
        bgColor={activeSection === 1 ? "yellow.100" : "white"}
        boxShadow={
          activeSection === 1 ? "0 0 15px rgba(255,255,255,0.95)" : "none"
        }
      />
      <Box
        as="a"
        href="#section-3"
        w="10px"
        height="10px"
        borderRadius="full"
        bgColor={activeSection === 2 ? "yellow.100" : "white"}
        boxShadow={
          activeSection === 2 ? "0 0 15px rgba(255,255,255,0.95)" : "none"
        }
      />
      <Box
        as="a"
        href="#section-4"
        w="10px"
        height="10px"
        borderRadius="full"
        bgColor={activeSection === 3 ? "yellow.100" : "white"}
        boxShadow={
          activeSection === 3 ? "0 0 15px rgba(255,255,255,0.95)" : "none"
        }
      />
    </VStack>
  );
};

export default Nav;
