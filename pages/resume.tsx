import type { ReactElement } from 'react'
import Head from 'next/head';
import { DownloadIcon } from '@chakra-ui/icons'
import { Box, Button, Divider, Flex, Text, useBreakpointValue, Link } from '@chakra-ui/react';
import Layout from '../components/Layout'

const Resume = () => {
    const sizeResponsive = useBreakpointValue({ base: 'sm', lg: 'lg' })


    return (
        <>
            <Head>
                <title>Resume - Dumto Imoh</title>
                <meta property="og:title" content="Resume" key="title" />
                <meta property="og:description" content="Wealth of experience " key="description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box padding={'2rem'} color={'white'} py={'3rem'} bg={'primary'} minHeight={"100vh"}>
                <Flex direction={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Text fontSize={'2xl'}>{'<'}Resume{'>'}</Text>
                </Flex>

                <Flex mt={'1rem'} justifyContent={{ base: 'center', lg: 'end' }}>
                    <Button size={sizeResponsive} variant={'solid'} _hover={{ background: 'accent' }} rightIcon={<DownloadIcon />}>
                        <Link textDecoration={'none'} _hover={{ textDecoration:'none' }} href="https://resume.io/r/StdctoOZc" isExternal target={'_blank'}>
                            View resume
                        </Link>
                    </Button>
                </Flex>

                <Flex direction={{ base: 'column-reverse', lg: 'row' }} justifyContent={'center'} mt={'2rem'}>
                    <Flex direction={'column'} fontSize={'md'} fontWeight={'normal'} width={{ base: '100%', lg: '30%', xl: '18%' }}>

                        <Flex display={{ base: 'none', lg: 'block' }} alignContent={'center'} direction={'column'}>
                            <Text>Dumto Imoh</Text>
                            <Text >imohdumto@gmail.com</Text>
                            <Text>Lagos, Nigeria.</Text>
                        </Flex>

                        <Flex direction={'column'} mt={'3rem'}>
                            <Text fontWeight={'medium'} fontSize={'large'}>Core Technologies:</Text>
                            <Text>HTML</Text>

                            <Text textDecoration={'underline'} mt={'1rem'} fontSize={'large'} fontWeight={'semibold'}>CSS</Text>
                            <Text>Chakra UI🇳🇬</Text>
                            <Text>Tailwind</Text>
                            <Text>Sass</Text>
                            <Text>Bootstrap</Text>
                            <Text>Vuetify</Text>

                            <Text textDecoration={'underline'} mt={'1rem'} fontSize={'large'} fontWeight={'semibold'}>Javascript:</Text>
                            <Text>React</Text>
                            <Text>Redux</Text>
                            <Text>Vue</Text>
                            <Text>Vuex</Text>

                            <Text textDecoration={'underline'} mt={'1rem'} fontSize={'large'} fontWeight={'semibold'}>APIS:</Text>
                            <Text>Apollo/GraphQL</Text>
                            <Text>REST</Text>

                            <Text textDecoration={'underline'} mt={'1rem'} fontSize={'large'} fontWeight={'semibold'}>Repositories:</Text>
                            <Text>Github</Text>
                            <Text>Gitlab</Text>

                            <Text textDecoration={'underline'} mt={'1rem'} fontSize={'large'} fontWeight={'semibold'}>AGILE:</Text>
                            <Text>Scrum</Text>

                            <Box display={{ base: 'block', lg: 'none' }} my={'3rem'} width={{ base: '100%', md: '80%' }} fontSize={'md'}>
                                Open to full-time/ remote opportunities.
                            </Box>
                        </Flex>
                    </Flex>

                    <Flex direction={'column'} fontSize={'md'} fontWeight={'normal'} width={{ base: '100%', lg: '65%' }}>
                        <Text fontSize={'4xl'} fontWeight={'bold'}>Dumto Imoh</Text>
                        <Text fontSize={'md'} my={'2'} fontWeight={'medium'}>Software Developer</Text>
                        <Text width={{ base: '100%', md: '80%' }} fontSize={'sm'}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, molestias! Maiores vitae possimus similique libero blanditiis
                            quasi dolorem, aspernatur nemo optio nesciunt unde alias sapiente cupiditate deleniti sunt accusantium suscipit?
                        </Text>
                        <Box marginTop={'2rem'}>
                            <Text fontSize={'md'} my={'2'} fontWeight={'medium'}>Experience</Text>

                            <Flex direction={{ base: 'column', md: 'row' }} alignItems={{ base: 'flex-start', md: 'center' }}>
                                <Text fontWeight={'medium'} fontSize={'md'}>
                                    Intelligent Innovations
                                </Text>
                                <Divider display={{ base: 'none', md: 'block' }} mx={'1rem'} width={'4%'}></Divider>
                                <Text fontStyle={'italic'} fontWeight={'thin'} fontSize={'md'}>
                                    Frontend Developer
                                </Text>
                            </Flex>
                            <Text fontStyle={'italic'} my={'1rem'} fontWeight={'thin'} fontSize={'sm'}>
                                Jan 2020 - July 2021
                            </Text>
                            <Box width={{ base: '100%', md: '80%' }} fontSize={'sm'} >
                                Intelligent Innovations Co. is a software development company that designs and develops technology solutions
                                that help enterprises automate their businesses in the most cost effective way whilst leveraging many years of
                                industry expertise and our world-class software development team. Some of our partners include:
                                <Text fontWeight={'bold'}>9mobile, Airtel, MTN, UBA and a host of others.</Text>
                            </Box>

                            <Box mt={'2rem'}>
                                <Flex direction={{ base: 'column', md: 'row' }} alignItems={{ base: 'flex-start', md: 'center' }}>
                                    <Text fontWeight={'medium'} fontSize={'md'}>
                                        AirSynQ IO
                                    </Text>
                                    <Divider display={{ base: 'none', md: 'block' }} mx={'1rem'} width={'4%'}></Divider>
                                    <Text fontStyle={'italic'} fontWeight={'thin'} fontSize={'md'}>
                                        Frontend Developer
                                    </Text>
                                </Flex>
                                <Text fontStyle={'italic'} my={'1rem'} fontWeight={'thin'} fontSize={'sm'}>
                                    Nov 2020 - Feb 2021 (Remote)
                                </Text>
                                <Box width={{ base: '100%', md: '80%' }} fontSize={'sm'}>
                                    At AirSynQ, we are a team of developers who are passionate about building Automated, AI-assisted  Aerial surveillance all year round
                                    for your most valued assets.We use Balloon Satellite and intelligent software for automated assessment of surveillance
                                    feeds giving rise to real-time monitoring, event detection, analytics, Live-logging, etc.
                                </Box>
                            </Box>

                            <Box mt={'2rem'}>
                                <Flex direction={{ base: 'column', md: 'row' }} alignItems={{ base: 'flex-start', md: 'center' }}>
                                    <Text fontWeight={'medium'} fontSize={'md'}>
                                        Deveote
                                    </Text>
                                    <Divider display={{ base: 'none', md: 'block' }} mx={'1rem'} width={'4%'}></Divider>
                                    <Text fontStyle={'italic'} fontWeight={'thin'} fontSize={'md'}>
                                        Frontend Developer
                                    </Text>
                                </Flex>
                                <Text fontStyle={'italic'} my={'1rem'} fontWeight={'thin'} fontSize={'sm'}>
                                    March 2021 - April 2021 (Contract)
                                </Text>
                                <Box fontSize={'sm'}>
                                    Deveote is a technology company that builds scalable websites and mobile applications for businesses for an ultimate ROI.
                                </Box>
                            </Box>

                            <Box mt={'2rem'}>
                                <Flex direction={{ base: 'column', md: 'row' }} alignItems={{ base: 'flex-start', md: 'center' }}>
                                    <Text fontWeight={'medium'} fontSize={'md'}>
                                        Octosoft Technologies
                                    </Text>
                                    <Divider display={{ base: 'none', md: 'block' }} mx={'1rem'} width={'4%'}></Divider>
                                    <Text fontStyle={'italic'} fontWeight={'thin'} fontSize={'md'}>
                                        Frontend Developer
                                    </Text>
                                </Flex>
                                <Text fontStyle={'italic'} my={'1rem'} fontWeight={'thin'} fontSize={'sm'}>
                                    july 2021 - Present
                                </Text>
                                <Box width={{ base: '100%', md: '80%' }} fontSize={'sm'}>
                                    An innovative health-tech startup leveraging Artificial Intelligence (AI) to make health care accessible and affordable. Octosoft software and
                                    health tech products enable a 360 degrees health care from health insurance (Octohealth), health care delivery (Octocare), consumer health tech
                                    and payments (Octopay).
                                </Box>
                            </Box>

                            <Box display={{ base: 'none', lg: 'block' }} my={'3rem'} width={{ base: '100%', md: '80%' }} fontSize={'md'}>
                                Open to full-time/ remote opportunities.
                            </Box>

                        </Box>

                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default Resume

Resume.getLayout = (page: ReactElement) => (
    <Layout>{page}</Layout>
)

