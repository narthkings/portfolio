import type { ReactElement } from 'react'
import { Formik, Form } from 'formik';
import { Box, Flex, Text, Input, Textarea, FormControl, Button, FormHelperText, } from '@chakra-ui/react'
import Layout from '../components/Layout'
import { MessageSchema } from '../utilities/schema';
import { Message } from '../types';

const Contact = () => {
    const initialValues = {
        name: '',
        email: '',
        message: '',
    }

    const onSubmit = (details: Message, { resetForm }: any) => {

        resetForm()
    }


    return (
        <Box padding={'2rem'} bg='black' height={"92vh"} color="white">
            <Flex direction={'column'} alignItems={'center'} justifyContent={'center'}>
                <Text fontSize={'2xl'}>{'<'}Contact{'>'}</Text>
                <Text fontStyle={'italic'} fontSize={'md'}>You wanna reach out to me 💌</Text>
            </Flex>

            <Formik validationSchema={MessageSchema} initialValues={initialValues} onSubmit={onSubmit}>
                {({ values: details, handleSubmit, handleChange, handleBlur, errors, touched }) => (
                    <Form onSubmit={handleSubmit}>
                        <Box textAlign={'center'} display={'flex'} flexDirection={'column'} justifyContent={'center'} marginTop={'5rem'}>
                            <FormControl id='name'>
                                <Input id='name' name="name" onChange={handleChange} onBlur={handleBlur} value={details.name} variant='filled' placeholder='Enter Name' size='lg' width={{base:'100%', md:'100%', xl:'50%'}} />
                                <FormHelperText color="red">{errors.name && touched.name && errors.name}</FormHelperText>
                            </FormControl>

                            <FormControl id='email'>
                                <Input id="email" name='email' onChange={handleChange} value={details.email} onBlur={handleBlur} variant='filled' placeholder='Enter Email address' size='lg' width={{base:'100%', md:'100%', xl:'50%'}}  marginTop={'2rem'} />
                                <FormHelperText color="red">{errors.email && touched.email && errors.email}</FormHelperText>
                            </FormControl>

                            <FormControl id="message">
                                <Textarea id="message" name='message' onChange={handleChange} onBlur={handleBlur} value={details.message} variant='filled' placeholder="Amazing Portfolio, I’d like you to work with my team on a project ………" width={{base:'100%', md:'100%', xl:'50%'}}  size="lg" height={'8rem'} marginTop={'2rem'} />
                                <FormHelperText color="red">{errors.message && touched.message && errors.message}</FormHelperText>
                            </FormControl>
                        </Box>
                        <Box display={'flex'} justifyContent={'center'}>
                            <Button
                                mt={4}
                                width={{base:'100%', md:'100%', xl:'15%'}} 
                                color={'primary'}
                                size={'md'}
                                background={'secondary.100'}
                                // isLoading={props.isSubmitting}
                                type='submit'
                            >
                                Send Message
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}

export default Contact

Contact.getLayout = (page: ReactElement) => (
    <Layout>{page}</Layout>
)