import { HStack, Text, Box, Heading, VStack } from "@chakra-ui/react"
import { useEffect, useState } from 'react'

const TypesSection = (props) => {
    const [description, setDescription] = useState(null);

    useEffect(() => {
        fetch(props.description)
            .then((res) => res.json())
            .then((data) => {
                try {
                    setDescription(data.flavor_text_entries[0].flavor_text)
                } catch (error) {
                    setDescription("??????")
                }

            })
    }, [props.description])

    const myUpperCase = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const borderStyle = {
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "4px 8px",
        backgroundColor: "#f0f0f0"
    };

    return (
        <VStack spacing={2} alignItems="center" justifyContent="center">
            <Heading size="lg" >Description:</Heading>
            <Text>{description}</Text>
            <Heading size="lg" >Types:</Heading>
            {
                props.secondType === "NO" ? (
                    <Box style={borderStyle}>
                        <Text>{myUpperCase(props.firstType)}</Text>
                    </Box>
                ) : (
                    <HStack spacing={2}>
                        <Box style={borderStyle}>
                            <Text>{myUpperCase(props.firstType)}</Text>
                        </Box>
                        <Box style={borderStyle}>
                            <Text>{myUpperCase(props.secondType)}</Text>
                        </Box>
                    </HStack>
                )
            }
        </VStack>
    )
}

export default TypesSection