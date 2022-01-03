import { Button, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerFooter, Flex, Link, } from '@chakra-ui/react'
import NextLink from "next/link"

type Props = {
    isOpen: boolean;
    onClose: () => void;
}
const SideDrawer = ({ isOpen, onClose }: Props) => {

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            size={'md'}
        >
            <DrawerOverlay />
            <DrawerContent height={'50%'} bg={'#0B0B0B'}>
                <DrawerCloseButton height={"2rem"} color={'white'} />
                {/* <DrawerHeader>Create your account</DrawerHeader> */}

                <DrawerBody mt={'1rem'}>
                    <Flex width="100%" height={'100%'} alignItems={'center'} justifyContent={'space-evenly'} color={'white'} direction={'column'}>
                        <NextLink href='/' passHref>
                            <Link fontSize={"2xl"}>Home</Link>
                        </NextLink>

                        <NextLink href='/projects' passHref>
                            <Link fontSize={"2xl"}>Project</Link>
                        </NextLink>

                        <NextLink href='/resume' passHref>
                            <Link fontSize={"2xl"}>Resume</Link>
                        </NextLink>

                        <NextLink href='/contact' passHref>
                            <Link fontSize={"2xl"}>Contact</Link>
                        </NextLink>
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default SideDrawer
