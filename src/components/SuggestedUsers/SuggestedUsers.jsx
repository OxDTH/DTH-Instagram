import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
    return <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />

        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
                See All
            </Text>
        </Flex>

        <SuggestedUser name="Anshuman Sahoo" followers={6836} avatar="" />
        <SuggestedUser name="Ayushman pattanaik" followers={8373} avatar="" />
        <SuggestedUser name="Kazama Katzz" followers={98465} avatar="" />

        <Box
            fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
            © 2025 Built by {" "}
            <Link
                href="https://www.instagram.com/https://www.instagram.com/ritik_mohapatra_rk/" target="_blank" color={"blue.500"} fontSize={14}>
                Ritik Mohapatra
            </Link>
        </Box>
    </VStack>;
};

export default SuggestedUsers;