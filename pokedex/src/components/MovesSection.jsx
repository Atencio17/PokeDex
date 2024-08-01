import { Box, Card, CardHeader, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const MovesSection = ({ items }) => {

    const [accuracies, setAccuracies] = useState({});

    useEffect(() => {
        const fetchAccuracies = async () => {
            const newAccuracies = await Promise.all(
                items.map(async (item) => {
                    const res = await fetch(item.move.url);
                    const data = await res.json();
                    return data.accuracy === null ? 0 : data.accuracy;
                })
            );
            setAccuracies(newAccuracies);
        };

        fetchAccuracies();
    }, [items]);

    const myUpperCase = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <Box bg="#F3F3F7"
            width="100%"
            height="240px" // Altura fija para la sección scrollable
            overflowY="scroll" // Habilita el desplazamiento vertical
            p={4} textAlign="center"
        >
            <Heading size="lg">MOVES</Heading>
            {items.map((item, index) => (
                <Card key={index} variant='unstyled' bg="#F3F3F7">
                    <CardHeader>{myUpperCase(item.move.name)} - Accuracy: {accuracies[index]} </CardHeader>
                </Card>
            ))}
        </Box>
    );
}

export default MovesSection;
