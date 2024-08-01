import { HStack, Box, Heading, Progress, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ProgressBar = ({ name, value }) => {
    return (
        <HStack>
            <Heading size="md" width={20}>{name}</Heading>
            <Box flex="1">
                <HStack spacing={2} alignItems="center">
                    <MotionBox
                        initial={{ width: 0 }}
                        animate={{ width: `${value}%` }}
                        transition={{ duration: 1 }}
                        width="100%"
                    >
                        <Progress bg="gray.300" colorScheme="red" value={value} width="100%" max="255" />
                    </MotionBox>
                    <Text size="sm" textAlign="right">{value}</Text>
                </HStack>
            </Box>
        </HStack>
    );
}

export default ProgressBar;
