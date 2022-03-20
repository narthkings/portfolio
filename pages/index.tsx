import { Box, Flex, Text, Link, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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
        <meta
          name="description"
          content="Dumto Imoh is a frontend developer based in Lagos, Nigeria, with over teo years of experience"
        />
        <meta property="og:title" content="Welcome to my website" key="title" />
        <meta
          property="og:description"
          content="Dumto Imoh is a frontend developer based in Lagos, Nigeria, with over teo years of experience"
          key="description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg="primary" height={"92vh"}>
        <Box
          width={{ base: "100%", md: "80%", xl: "41%" }}
          padding={"2rem"}
          color="white"
        >
          <Text
            marginTop={{ base: "6rem", md: "10rem" }}
            textTransform={"capitalize"}
            fontWeight={"semibold"}
          >
            {"{"} WHO AM I {"}"}
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
          <Text marginTop={"2rem"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum
          </Text>
          <Button
            onClick={() => router.push("/resume")}
            borderRadius="0px"
            size={"lg"}
            textTransform={"uppercase"}
            variant="outline"
            marginTop={"2rem"}
          >
            Resume
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
