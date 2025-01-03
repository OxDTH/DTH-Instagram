import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

// Instead of adding the Sidebar component to every page, we can add it only once to the PageLayout component and wrap the children with it. This way, the Sidebar will be displayed on every page except the auth pages.

const PageLayout = ({children}) => {
    const {pathname} = useLocation()
  return (
    <Flex>
        {/* SideBar Left */}
        {pathname !== "/auth" ? (
            <Box w={{ base: "70px", md: "240px" }}>
            <Sidebar />
        </Box>
        ) : null}
        {/* Page Content On the Right */}
        <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
            {children}
        </Box>
    </Flex>
  );
};

export default PageLayout;