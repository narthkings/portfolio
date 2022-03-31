import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Link, useMediaQuery } from "@chakra-ui/react";
import NextLink from "next/link";

type Iprops = {
  onOpen: () => void;
};
const Header = ({ onOpen }: Iprops) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      zIndex={"11"}
      position={"-webkit-sticky"}
      sx={{ position: "sticky", /* Safari */ top: "0" }}
      width={{ base: "100%", md: "93vw", lg: "100%" }}
      bg="primary"
      padding={"1.5rem"}
      height="8%"
      justifyContent={"space-between"}
    >
      <Box
        opacity={1}
        width={{ base: "15%", md: "5%" }}
        position={"relative"}
        bg="gray.100"
        pl="2"
        height={{ base: "2rem", lg: "2.3rem" }}
      >
        <NextLink href="/" passHref>
          <Link>
            <Text
              width="10rem"
              position={"absolute"}
              textTransform={"uppercase"}
              fontWeight={"bold"}
              fontSize={{ base: "lg", lg: "2xl" }}
              color="white"
            >
              Dumto imoh
            </Text>
          </Link>
        </NextLink>
      </Box>

      {!isMobile ? (
        <Flex width={"48%"} justifyContent={"space-evenly"}>
          <NextLink href="/" passHref>
            <Text cursor={'pointer'} color={"white"} fontSize={"lg"}>
              Home
            </Text>
          </NextLink>

          <NextLink href="/projects" passHref>
            <Text cursor={'pointer'} color={"white"} fontSize={"lg"}>
              Projects
            </Text>
          </NextLink>

          <NextLink href="/resume" passHref>
            <Text cursor={'pointer'} color={"white"} fontSize={"lg"}>
              Resume
            </Text>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Text cursor={'pointer'} color={"white"} fontSize={"lg"}>
              Contact
            </Text>
          </NextLink>
        </Flex>
      ) : (
        <HamburgerIcon
          fontSize={"2xl"}
          cursor={"pointer"}
          onClick={onOpen}
          color="white"
        />
      )}
    </Flex>
  );
};

export default Header;
