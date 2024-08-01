import { SimpleGrid } from "@chakra-ui/react";

const AllStatsSection = ({ children }) => {
    return (
        <SimpleGrid
            columns={{ base: 1, md: 3 }}
            width="100%"
            px={8}
            spacing={8}
        >
            {children}
        </SimpleGrid>
    );
}

export default AllStatsSection;
