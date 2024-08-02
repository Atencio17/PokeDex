import React from "react";
import { Heading, VStack, Stack } from "@chakra-ui/react";
import PkCard from './Card'

const PokemonSection = (props) => {
    const myUpperCase = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    return (
        <VStack >
            <Heading>{myUpperCase(props.pokeName)}</Heading>

            <Stack direction='row' alignItems="center" s>

                <PkCard sex="m" maleFront={props.pokeImg} maleBack={props.pokeImgBack}
                    maleShinyFront={props.pokeImgShiny} maleShinyBack={props.pokeImgBackShiny} />

                <PkCard sex="f" femaleFront={props.pokeImgFemale == null ? props.pokeImg : props.pokeImgFemale}
                    femaleBack={props.pokeImgBackFemale == null ? props.pokeImgBack : props.pokeImgBackFemale}
                    femaleShinyFront={props.pokeImgShinyFemale == null ? props.pokeImgShiny : props.pokeImgShinyFemale}
                    femaleShinyBack={props.pokeImgBackShinyFemale == null ? props.pokeImgBackShiny : props.pokeImgBackShinyFemale} />

            </Stack>
        </VStack>
    );
}

export default PokemonSection
