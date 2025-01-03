import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useState, useEffect } from "react";

const FeedPosts = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <Container maxW={"container.sm"} py={10} px={2}>
            {isLoading &&
                [0, 1, 2, 3].map((_, idx) => (
                    <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                        <Flex gap="2">
                            <SkeletonCircle size="10" />
                            <VStack alignItems={"flex-start"} gap={2}>
                                <Skeleton height="10px" width={"200px"} />
                                <Skeleton height="10px" width={"200px"} />
                            </VStack>
                        </Flex>
                        <Skeleton width={"full"}>
                            <Box height={"500px"}>contents wrapped</Box>
                        </Skeleton>
                    </VStack>
                ))}

            {!isLoading && (
                <>
                    <FeedPost img='/img1.png' username='ritikmohapatra_' avatar='/img1.png' />
                    <FeedPost img='/img2.png' username='ritik2' avatar='/img2.png' />
                    <FeedPost img='/img3.png' username='ritik3' avatar='/img3.png' />
                    <FeedPost img='/img4.png' username='ritik4' avatar='/img4.png' />
                </>
            )}
        </Container>
    );
};

export default FeedPosts;
