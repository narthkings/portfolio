import { Box, Flex, useDisclosure, Text, Link } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import SideDrawer from "./SideDrawer";

const Layout: React.FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex direction={"column"}>
        <Flex direction={"row"}>
          <SideBar />
          <Flex
            flexBasis={{ base: "100%", md: "95%" }}
            height={"100%"}
            // height={'calc(100vh - -0.875rem)'}
            direction={"column"}
            justifyContent={"space-between"}
          >
            <Header onOpen={onOpen} />
            <Flex direction={'column'}>
              <Box >{children}</Box>
              <Flex
                alignItems={{ base: "center" }}
                direction={{ base: "column", md: "row" }}
                justifyContent={"space-between"}
                p={"1rem"}
                background={"primary"}
              >
                <Text fontSize={{ base: ".8rem", lg: "1rem" }} color={"white"}>
                  Copyright {new Date().getFullYear()} ©
                  <Link href="https://twitter.com/narthcodes" isExternal>
                    Dumto Imoh
                  </Link>
                </Text>

                <Link
                  fontSize={{ base: ".8rem", lg: "1rem" }}
                  color={"white"}
                  href="https://twitter.com/Faith_Egwuenu"
                  isExternal
                >
                  Designed by Faith Egwuenu ❤️
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Layout;
