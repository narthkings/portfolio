import type { ReactElement } from 'react'
import type { NextPage } from 'next'

import { Box, Flex, Text } from '@chakra-ui/react'
import Layout from '../components/Layout'


const Contact = () => {

    return (
        <Box bg='black' height={"92vh"} color="white" >
            <Flex justifyContent={'center'}>
                <Text fontSize={'2xl'}>{'<'}Contact{'>'}</Text>
            </Flex>
        </Box>
    )
}

export default Contact

Contact.getLayout = (page: ReactElement) => (
    <Layout>{page}</Layout>
)