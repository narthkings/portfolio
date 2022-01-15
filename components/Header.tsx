import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'

type Iprops = {
    onOpen: () => void;
}
const Header = ({ onOpen }: Iprops) => {

    return (
        <Flex zIndex={'11'} position={'fixed'} width={{base:'100%', md: '91%', lg: '95%' }} bg="primary" padding={'2rem'} height="8%" justifyContent={'space-between'}>
            <Box opacity={1} width="5%" position={'relative'} bg="gray.100" pl="2" height={'2.3rem'}>
                <Text width="10rem" position={'absolute'} textTransform={'uppercase'} fontWeight={'bold'} fontSize={'2xl'} color="white">Dumto imoh</Text>
            </Box>

            <HamburgerIcon fontSize={'2xl'} cursor={'pointer'} onClick={onOpen} color="white" />
        </Flex>
    )
}

export default Header
