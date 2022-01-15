import { Box, Flex, Text, Link } from '@chakra-ui/react'


const SideBar = () => {
  return (
    <Box height={'calc(100vh - -0.875rem)'} position={'sticky'} top={'0'} overscrollBehavior={'contain'} display={['none', 'none', 'block']} bg="primary" flexBasis={'5%'}>
      <Flex height="100%" direction={'column'} alignItems={'center'} justifyContent={"space-evenly"}>
        <Text color="secondary.100" fontWeight={'medium'} textTransform={'uppercase'} transform="rotate(-90deg)">
          <Link href='https://chakra-ui.com' isExternal>
            Github
          </Link>
        </Text>
        <Text color="secondary.100" fontWeight={'medium'} textTransform={'uppercase'} transform="rotate(-90deg)">
          <Link href='https://chakra-ui.com' isExternal>
            Linkedin
          </Link>
        </Text>
        <Text color="secondary.100" fontWeight={'medium'} textTransform={'uppercase'} transform="rotate(-90deg)">
          <Link href='https://chakra-ui.com' isExternal>
            Twitter
          </Link>
        </Text>
      </Flex>
    </Box>
  )
}

export default SideBar
