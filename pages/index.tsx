import { Box, Flex, Text, Link, Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typed from 'react-typed';
import type { ReactElement } from 'react'
import Layout from '../components/Layout'



const Home = () => {

  return (
    <Box>
      <Box bg="primary" height={"92vh"}>
        <Box width={'41%'} padding={'2rem'} color="white" >
          <Text marginTop={'10rem'} textTransform={'capitalize'} fontWeight={'semibold'}>{'{'} WHO AM I  {'}'}</Text>
          <Text textTransform={'capitalize'} fontSize={'6xl'} fontWeight={'bold'}>
            <Typed
              strings={"Frontend Developer".split(',')}
              typeSpeed={100}
              loop
            />
          </Text>
          <Text marginTop={'2rem'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
          </Text>
          <Button borderRadius='0px' size={'lg'} textTransform={'uppercase'} variant="outline" marginTop={'2rem'}>Resume</Button>
        </Box>
      </Box>

    </Box>
  )
}

export default Home;

Home.getLayout = (page: ReactElement) => (
  <Layout>
    {page}
  </Layout>
)
