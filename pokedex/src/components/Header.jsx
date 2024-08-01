import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Box, HStack, Input, InputGroup, InputLeftElement, Image } from "@chakra-ui/react";
import pokeball from '../assets/game.png';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    // Asegúrate de que el valor sea numérico antes de actualizar el estado
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setSearchTerm(value);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={10}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" px={[4, 8, 16]}>
        <HStack
          px={[4, 8, 16]}
          py={[2, 4]}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={[4, 8]} height="60px" px={4} alignItems="center">
              <Image src={pokeball} boxSize="40px" />
            </HStack>
          </nav>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FontAwesomeIcon icon={faSearch} />}
            />
            <Input
              placeholder="Search by number of pokedex..."
              variant="filled"
              bg="gray.800"
              color="white"
              borderRadius="md"
              value={searchTerm}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
              type="number" // Restricción para aceptar solo números
            />
          </InputGroup>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
