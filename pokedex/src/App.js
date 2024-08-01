import './App.css';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import { ChakraProvider, HStack, IconButton, Text, Box, VStack, Divider } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import PokemonSection from "./components/PokemonSection";
import Header from './components/Header';
import StatsSection from './components/StatsSection';
import AllStatsSection from './components/AllStatsSection';
import TypesSection from './components/TypesSection';
import MovesSection from './components/MovesSection';
import { motion } from 'framer-motion';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonNumber, setPokemonNumber] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [pokemonNumber]);

  const handleSearch = (searchTerm) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        setPokemonNumber(data.id);
      })
      .catch((error) => console.error('Error fetching Pokémon:', error));
  };

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1 } }
  };

  if (!pokemon) {
    return (
      <ChakraProvider>
        <main className='App'>
          <Header onSearch={handleSearch} />
          <Box mt="90px" />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}
          >
            <Text fontSize="xl" fontWeight="bold">Loading...</Text>
          </motion.div>
        </main>
      </ChakraProvider>
    );
  }

  const hasSecondType = pokemon.types.length > 1;
  const firstType = pokemon.types[0].type.name;
  const secondType = hasSecondType ? pokemon.types[1].type.name : "NO";

  return (
    <ChakraProvider>
      <main className='App'>
        <Header onSearch={handleSearch} />
        <Box mt="90px" />
        <HStack
          alignItems="center"
          justifyContent="center"
          spacing={[4, 8, 20]} // Espaciado responsive
          px={[4, 8, 16]} // Padding responsive
        >
          <IconButton
            icon={<ChevronLeftIcon />}
            onClick={() => {
              if (pokemonNumber > 1) {
                setPokemonNumber(pokemonNumber - 1);
              }
            }}
            disabled={pokemonNumber === 1}
            size={['sm', 'md', 'lg']} // Tamaño responsive
          />
          <PokemonSection
            pokeImg={pokemon.sprites.front_default}
            pokeImgBack={pokemon.sprites.back_default}
            pokeImgFemale={pokemon.sprites.front_female}
            pokeImgBackFemale={pokemon.sprites.back_female}
            pokeImgShiny={pokemon.sprites.front_shiny}
            pokeImgBackShiny={pokemon.sprites.back_shiny}
            pokeImgShinyFemale={pokemon.sprites.front_shiny_female}
            pokeImgBackShinyFemale={pokemon.sprites.back_shiny_female}
            pokeName={pokemon.name}
          />
          <IconButton
            icon={<ChevronRightIcon />}
            onClick={() => {
              if (pokemonNumber < 1025) {
                setPokemonNumber(pokemonNumber + 1);
              }
            }}
            disabled={pokemonNumber === 1025}
            size={['sm', 'md', 'lg']} // Tamaño responsive
          />
        </HStack>
        <Divider />
        <AllStatsSection>
          <VStack alignItems="center" justifyContent="center">
            <TypesSection
              firstType={firstType}
              secondType={secondType}
              description={pokemon.species.url}
            />
          </VStack>
          <StatsSection
            hp={pokemon.stats[0].base_stat}
            atk={pokemon.stats[1].base_stat}
            def={pokemon.stats[2].base_stat}
            satk={pokemon.stats[3].base_stat}
            sdef={pokemon.stats[4].base_stat}
            vel={pokemon.stats[5].base_stat}
          />
          <VStack alignItems="center" justifyContent="center">
            <MovesSection items={pokemon.moves} />
          </VStack>
        </AllStatsSection>
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
