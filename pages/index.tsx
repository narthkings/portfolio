import { Box, Flex, Text, Link, Button, Image } from "@chakra-ui/react";
import Head from "next/head";
import Typed from "react-typed";
import type { ReactElement } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Home - Dumto Imoh</title>
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_IMAGE}`} />
        <meta
          name="description"
          content="Dumto Imoh is a frontend developer based in Nigeria, with over teo years of experience"
        />
        <meta property="og:title" content="Welcome to my website" key="title" />
        <meta
          property="og:description"
          content="Dumto Imoh is a frontend developer based in Nigeria, with over two years of experience"
          key="description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction={{ base: 'column', xl: 'row' }} alignItems={{ base: 'center', xl: 'unset' }} justifyContent={'space-between'} bg="primary" height={"92vh"}>
        <Flex flexDirection={{ base: 'column' }} alignItems={{ base: 'center', lg: 'unset' }} width={{ base: "100%", md: "80%", xl: "45%" }} padding={"2rem"} color="white">
          <Text
            marginTop={{ base: "0rem", lg: "10rem" }}
            textTransform={"capitalize"}
            fontWeight={"semibold"}
            mb={'.5rem'}
          >
            Hi I&apos;m Dumto,
          </Text>
          <Text
            lineHeight={"65px"}
            textTransform={"capitalize"}
            fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
            fontWeight={"bold"}

          >
            <Typed
              strings={"Frontend Developer".split(",")}
              typeSpeed={100}
              loop
              className="typed-strings"
            />
          </Text>
          <Text width={{ base: '100%', md: '90%', xl: '90%' }} textAlign={{ base: 'justify', lg: 'unset' }} marginTop={{ base: 'unset', lg: "2rem" }}>
            Welcome to my little corner of the internet. I am a frontend engineer with a
            passion for user experience and smart front-end solutions using modern
            technologies.When I am not doing frontend development, I am either learning
            blockchain or practising algorithms or just listening to music 😊
          </Text>
          <Button
            onClick={() => router.push("/resume")}
            borderRadius="0px"
            size={"lg"}
            textTransform={"uppercase"}
            variant="outline"
            marginTop={"2rem"}
            width={'40%'}
          >
            Resume
          </Button>
        </Flex>
        <Box display={{ lg: 'none', xl: 'unset' }} className="photoImg" width={{ base: '73%', md: '42%', lg: '42%' }} height={{ md: '60%', lg: '90%' }} mt={{ base: 'unset', xl: '5rem' }}>
          <Image height={{ base: '100%', lg: '88%' }} objectFit={'scale-down'} alt="Dumto Imoh" src={`${process.env.NEXT_PUBLIC_IMAGE}`} />
        </Box>
      </Flex>
    </>
  );
};

export default Home;

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
