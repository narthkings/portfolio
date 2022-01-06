import { Badge, Box, Flex, Link, Text, Stack, useMediaQuery, SimpleGrid } from '@chakra-ui/react'
import { ReactElement } from 'react'
import Layout from '../components/Layout'

const Projects = () => {
    return (
        <Box padding={'2rem'} color={'white'} bg={'primary'} minHeight={"92vh"}>
            <Flex direction={'column'} alignItems={'center'} justifyContent={'center'}>
                <Text fontSize={'2xl'}>{'<'}Projects{'>'}</Text>
                <Text fontSize={'md'}>Projects I have worked on 😋</Text>
            </Flex>

            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={'2rem'} marginTop={'4rem'}>
                <Box borderRadius={'sm'} p="8" bg={'#16161A'} >
                    <Text fontSize={'lg'} fontWeight={'bold'}>Stripe</Text>
                    <Stack mt={'4'} direction='row' flexWrap={'wrap'}>
                        <Badge borderRadius={'3'} p={'.4rem'} variant='solid' bg={'secondary.200'}>
                            Success
                        </Badge>
                        <Badge borderRadius={'3'} p={'.4rem'} variant='solid' bg={'secondary.200'}>
                            Success
                        </Badge>
                        <Badge borderRadius={'3'} p={'.4rem'} variant='solid' bg={'secondary.200'}>
                            Success
                        </Badge>

                    </Stack>
                    <Text fontSize={'small'} fontWeight={'light'} my={'5'}>A frame website that helps users to easily purchase different kind of frame and it sizes and also get it delivered to them</Text>
                    <Link textDecoration={'underline'} color={'secondary.100'} href='https://chakra-ui.com' isExternal>Project Url</Link>
                </Box>
                <Box borderRadius={'sm'} p="8" bg={'#16161A'} >
                    <Text fontSize={'lg'} fontWeight={'bold'}>Stripe</Text>
                    <Stack mt={'4'} direction='row' flexWrap={'wrap'}>
                        <Badge borderRadius={'3'} p={'.4rem'} variant='solid' bg={'secondary.200'}>
                            Success
                        </Badge>
                        <Badge borderRadius={'3'} p={'.4rem'} variant='solid' bg={'secondary.200'}>
                            Success
                        </Badge>
                        <Badge borderRadius={'3'} p={'.4rem'} variant='solid' bg={'secondary.200'}>
                            Success
                        </Badge>

                    </Stack>
                    <Text fontSize={'small'} fontWeight={'light'} my={'5'}>A frame website that helps users to easily purchase different kind of frame and it sizes and also get it delivered to them</Text>
                    <Link textDecoration={'underline'} color={'secondary.100'} href='https://chakra-ui.com' isExternal>Project Url</Link>
                </Box>
                <Box borderRadius={'sm'} p="8" bg={'#16161A'} >
                    <Text fontSize={'lg'} fontWeight={'bold'}>Stripe</Text>
                    <Stack mt={'4'} direction='row' flexWrap={'wrap'}>
                        <Badge borderRadius={'3'} p={'.4rem'} variant='solid' bg={'secondary.200'}>
                            Success
                        </Badge>
                        <Badge borderRadius={'3'} p={'.4rem'} variant='solid' bg={'secondary.200'}>
                            Success
                        </Badge>
                        <Badge borderRadius={'3'} p={'.4rem'} variant='solid' bg={'secondary.200'}>
                            Success
                        </Badge>

                    </Stack>
                    <Text fontSize={'small'} fontWeight={'light'} my={'5'}>A frame website that helps users to easily purchase different kind of frame and it sizes and also get it delivered to them</Text>
                    <Link textDecoration={'underline'} color={'secondary.100'} href='https://chakra-ui.com' isExternal>Project Url</Link>
                </Box>
                <Box borderRadius={'sm'} p="8" bg={'#16161A'} >
                    <Text fontSize={'lg'} fontWeight={'bold'}>Stripe</Text>
                    <Stack mt={'4'} direction='row' flexWrap={'wrap'}>
                        <Badge borderRadius={'3'} p={'.4rem'} variant='solid' bg={'secondary.200'}>
                            Success
                        </Badge>
                        <Badge borderRadius={'3'} p={'.4rem'} variant='solid' bg={'secondary.200'}>
                            Success
                        </Badge>
                        <Badge borderRadius={'3'} p={'.4rem'} variant='solid' bg={'secondary.200'}>
                            Success
                        </Badge>

                    </Stack>
                    <Text fontSize={'small'} fontWeight={'light'} my={'5'}>A frame website that helps users to easily purchase different kind of frame and it sizes and also get it delivered to them</Text>
                    <Link textDecoration={'underline'} color={'secondary.100'} href='https://chakra-ui.com' isExternal>Project Url</Link>
                </Box>
                <Box borderRadius={'sm'} p="8" bg={'#16161A'} >
                    <Text fontSize={'lg'} fontWeight={'bold'}>Stripe</Text>
                    <Stack mt={'4'} direction='row' flexWrap={'wrap'}>
                        <Badge borderRadius={'3'} p={'.4rem'} variant='solid' bg={'secondary.200'}>
                            Success
                        </Badge>
                        <Badge borderRadius={'3'} p={'.4rem'} variant='solid' bg={'secondary.200'}>
                            Success
                        </Badge>
                        <Badge borderRadius={'3'} p={'.4rem'} variant='solid' bg={'secondary.200'}>
                            Success
                        </Badge>

                    </Stack>
                    <Text fontSize={'small'} fontWeight={'light'} my={'5'}>A frame website that helps users to easily purchase different kind of frame and it sizes and also get it delivered to them</Text>
                    <Link textDecoration={'underline'} color={'secondary.100'} href='https://chakra-ui.com' isExternal>Project Url</Link>
                </Box>

            </SimpleGrid>

        </Box>
    )
}

export default Projects
Projects.getLayout = (page: ReactElement) => (
    <Layout>
        {page}
    </Layout>
)