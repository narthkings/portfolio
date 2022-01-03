import type { ReactElement } from 'react'

import { Box, Flex, Text, Input, Textarea, FormControl, FormLabel, FormErrorMessage, FormHelperText, } from '@chakra-ui/react'
import Layout from '../components/Layout'


const Contact = () => {

    return (
        <Box bg='black' height={"92vh"} color="white" >
            <Flex direction={'column'} alignItems={'center'} justifyContent={'center'}>
                <Text fontSize={'2xl'}>{'<'}Contact{'>'}</Text>
                <Text fontStyle={'italic'} fontSize={'md'}>You wanna reach out to me 💌</Text>
            </Flex>

            <Flex direction={'column'} alignItems={'center'} justifyContent={'center'} marginTop={'4rem'}>
                <Input variant='filled' placeholder='Enter Name' size='lg' width={'50%'} />
                <Input variant='filled' placeholder='Enter Email address' size='lg' width={'50%'} marginTop={'2rem'} required/>
                <Textarea variant='filled' placeholder="Amazing Portfolio, I’d like you to work with my team on a project ……….." width={'50%'} size="lg" height={'8rem'} marginTop={'2rem'}/>
            </Flex>
        </Box>
    )
}

export default Contact

Contact.getLayout = (page: ReactElement) => (
    <Layout>{page}</Layout>
)