import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="Ritik mohapatra" size={"sm"} src="/profilepic.png" />
        <Text fontSize={12} fontWeight={"bold"}>
          RitikMohapatra
        </Text>
      </Flex>
      <Link

        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        style={{ textDecoration: "none" }}
      > Log out
      </Link>
    </Flex>
  );
};
export default SuggestedHeader;