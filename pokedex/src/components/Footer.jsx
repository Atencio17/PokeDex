import React from "react"; 
import { Box, Flex, Text } from "@chakra-ui/react"; 
 
const Footer = () => { 
  return ( 
    <Box backgroundColor="#18181b" py={[4, 6]} px={[4, 6]}>
      <footer> 
        <Flex 
          margin="0 auto" 
          px={[4, 8, 12]} 
          color="white" 
          justifyContent="center" 
          alignItems="center" 
          maxWidth="1024px" 
          height="auto" 
        > 
          <Text fontSize={["sm", "md"]}>
            Andres • © 2024
          </Text> 
        </Flex> 
      </footer> 
    </Box> 
  ); 
}; 

export default Footer