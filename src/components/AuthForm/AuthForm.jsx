import { Box, VStack, Image, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <VStack spacing={4}>
                    <Image src="/logo.png" height={24} cursor={"pointer"} alt='instagram logo' />

                    {isLogin ? <Login /> : <Signup />}

                    {/* OR TEXT */}
                    <Flex justifyContent={"center"} alignItems={"center"} gap={1} marginY={4} width={"full"}>
                        <Box flex={2} height={"1px"} bg={"gray.400"} />
                        <Text marginX={1} color={"white"}>OR</Text>
                        <Box flex={2} height={"1px"} bg={"gray.400"} />
                    </Flex>

                    <GoogleAuth prefix={isLogin ? "Log in" : "Sign Up"} />
                </VStack>
            </Box>

            <Box border={"1px solid gray"} borderRadius={4} padding={5} >
                <Flex alignItems={"center"} justifyContent={"center"} >
                    <Box mx={2} fontSize={14}>
                        {!isLogin ? "Already have an account?" : "Don't have an account?"}
                    </Box>
                    <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"} >
                        {!isLogin ? "Log in" : "Sign Up"}
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default AuthForm;