import {
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
  Flex,
  Link,
  Text
} from "@chakra-ui/react";
import NextLink from "next/link";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
const SideDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
      <DrawerOverlay />
      <DrawerContent height={"70%"} bg={"#0B0B0B"}>
        <DrawerCloseButton height={"2rem"} color={"white"} />

        <DrawerBody mt={"1rem"}>
          <Flex
            width="100%"
            height={"100%"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            color={"white"}
            direction={"column"}
          >
            <NextLink href="/" passHref>
              <Link onClick={onClose} fontSize={"2xl"}>
                Home
              </Link>
            </NextLink>

            <NextLink href="/projects" passHref>
              <Link onClick={onClose} fontSize={"2xl"}>
                Projects
              </Link>
            </NextLink>

            <NextLink href="/resume" passHref>
              <Link onClick={onClose} fontSize={"2xl"}>
                Resume
              </Link>
            </NextLink>

            <NextLink href="/contact" passHref>
              <Link onClick={onClose} fontSize={"2xl"}>
                Contact
              </Link>
            </NextLink>

            <Flex width={'100%'} justifyContent={"space-evenly"} my={'1rem'}>
              <Text
                color="secondary.100"
                fontWeight={"medium"}
                textTransform={"uppercase"}
              >
                <Link href="https://github.com/narthkings" isExternal>
                  Github
                </Link>
              </Text>

              <Text
                color="secondary.100"
                fontWeight={"medium"}
                textTransform={"uppercase"}
              >
                <Link href="https://www.linkedin.com/in/dumto-imoh/" isExternal>
                  Linkedin
                </Link>
              </Text>

              <Text
                color="secondary.100"
                fontWeight={"medium"}
                textTransform={"uppercase"}
              >
                <Link href="https://twitter.com/narthcodes" isExternal>
                  Twitter
                </Link>
              </Text>
            </Flex>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
