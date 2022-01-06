import { Flex, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import SideDrawer from './SideDrawer';


const Layout: React.FC = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Flex direction={'column'}>
                <Flex direction={'row'} >
                    <SideBar /> 
                    <Flex flexBasis={{base:'100%', md:'95%' }} height={"100%"} direction={'column'}>
                        <Header onOpen={onOpen} />
                        <main>{children}</main>
                    </Flex>
                </Flex>
            </Flex>
            <SideDrawer isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default Layout
