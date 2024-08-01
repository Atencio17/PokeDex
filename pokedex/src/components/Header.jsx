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
      backgroundColor="#18181b"
      zIndex={10}
      py={[2, 4]} // Ajuste del padding vertical
      px={[4, 8, 16]} // Ajuste del padding horizontal
      boxShadow="md" // Sombra para un poco de profundidad
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          spacing={[4, 8]}
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack spacing={[2, 4]} alignItems="center">
            <Image src={pokeball} boxSize={["30px", "40px"]} /> {/* Ajuste del tamaño de la imagen */}
          </HStack>
          <InputGroup width={["100%", "auto"]} maxWidth="500px"> {/* Ajuste del ancho de InputGroup */}
            <InputLeftElement
              pointerEvents="none"
              children={<FontAwesomeIcon icon={faSearch} color="gray.300" />}
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
