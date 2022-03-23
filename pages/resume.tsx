import type { ReactElement } from "react";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { query } from ".keystone/api";
import { DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import { Experience } from "../types";

export const getStaticProps = async () => {
  const experiences = (await query.experience.findMany({
    query: "id name_of_company role start_date end_date content{ document} ",
  })) as Experience[];
  return {
    props: {
      experiences,
    },
  };
};

const Resume = ({ experiences }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const sizeResponsive = useBreakpointValue({ base: "sm", lg: "lg" });

  return (
    <>
      <Head>
        <title>Resume - Dumto Imoh</title>
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_IMAGE}`} />
        <meta property="og:title" content="Resume" key="title" />
        <meta
          property="og:description"
          content="Repository of work experience as a frontend developer"
          key="description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        padding={"2rem"}
        color={"white"}
        py={"3rem"}
        bg={"primary"}
        minHeight={"100vh"}
      >
        <Flex direction={"column"} alignItems={"center"} justifyContent={"center"}>
          <Text fontSize={"2xl"}>
            {"<"}Resume{">"}
          </Text>
        </Flex>

        <Flex mt={"1rem"} justifyContent={{ base: "center", lg: "end" }}>
          <Button
            size={sizeResponsive}
            variant={"solid"}
            _hover={{ background: "accent" }}
            rightIcon={<DownloadIcon />}
          >
            <Link
              textDecoration={"none"}
              _hover={{ textDecoration: "none" }}
              href="https://resume.io/r/StdctoOZc"
              isExternal
              target={"_blank"}
            >
              View resume
            </Link>
          </Button>
        </Flex>

        <Flex
          direction={{ base: "column-reverse", lg: "row" }}
          justifyContent={"center"}
          mt={"2rem"}
        >
          <Flex
            direction={"column"}
            fontSize={"md"}
            fontWeight={"normal"}
            width={{ base: "100%", lg: "30%", xl: "18%" }}
          >
            <Flex
              display={{ base: "none", lg: "block" }}
              alignContent={"center"}
              direction={"column"}
            >
              <Text>Dumto Imoh</Text>
              <Text>imohdumto@gmail.com</Text>
              <Text>Lagos, Nigeria.</Text>
            </Flex>

            <Flex direction={"column"} mt={"3rem"}>
              <Text fontWeight={"medium"} fontSize={"large"}>
                Core Technologies:
              </Text>
              <Text>HTML</Text>

              <Text
                textDecoration={"underline"}
                mt={"1rem"}
                fontSize={"large"}
                fontWeight={"semibold"}
              >
                CSS
              </Text>
              <Text>Chakra UI🇳🇬</Text>
              <Text>Tailwind</Text>
              <Text>Sass</Text>
              <Text>Bootstrap</Text>
              <Text>Vuetify</Text>

              <Text
                textDecoration={"underline"}
                mt={"1rem"}
                fontSize={"large"}
                fontWeight={"semibold"}
              >
                Javascript:
              </Text>
              <Text>React</Text>
              <Text>Redux</Text>
              <Text>Vue</Text>
              <Text>Vuex</Text>

              <Text
                textDecoration={"underline"}
                mt={"1rem"}
                fontSize={"large"}
                fontWeight={"semibold"}
              >
                APIS:
              </Text>
              <Text>Apollo/GraphQL</Text>
              <Text>REST</Text>

              <Text
                textDecoration={"underline"}
                mt={"1rem"}
                fontSize={"large"}
                fontWeight={"semibold"}
              >
                Repositories:
              </Text>
              <Text>Github</Text>
              <Text>Gitlab</Text>

              <Text
                textDecoration={"underline"}
                mt={"1rem"}
                fontSize={"large"}
                fontWeight={"semibold"}
              >
                AGILE:
              </Text>
              <Text>Jira</Text>
              <Text>Trello</Text>

              <Box
                display={{ base: "block", lg: "none" }}
                my={"3rem"}
                width={{ base: "100%", md: "80%" }}
                fontSize={"md"}
              >
                Open to full-time/ remote opportunities.
              </Box>
            </Flex>
          </Flex>

          <Flex
            direction={"column"}
            fontSize={"md"}
            fontWeight={"normal"}
            width={{ base: "100%", lg: "65%" }}
          >
            <Text fontSize={"4xl"} fontWeight={"bold"}>
              Dumto Imoh
            </Text>
            <Text fontSize={"md"} my={"2"} fontWeight={"medium"}>
              Software Developer
            </Text>
            <Text width={{ base: "100%", md: "80%" }} fontSize={"sm"}>
              Hi 👋 there, welcome to my resume corner, below is my resume which sums up
              my work and years of experience in journey as a frontend developer.
            </Text>
            <Box marginTop={"2rem"}>
              <Text fontSize={"md"} my={"2"} fontWeight={"medium"}>
                Experience
              </Text>

              {experiences.map((exp) => (
                <Box data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                  data-aos-anchor-placement="top-bottom"
                  key={exp.id} mt={"2rem"}>
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    alignItems={{ base: "flex-start", md: "center" }}
                  >
                    <Text fontWeight={"medium"} fontSize={"md"}>
                      {exp.name_of_company}
                    </Text>
                    <Divider
                      display={{ base: "none", md: "block" }}
                      mx={"1rem"}
                      width={"4%"}
                    ></Divider>
                    <Text fontStyle={"italic"} fontWeight={"thin"} fontSize={"md"}>
                      {exp.role}
                    </Text>
                  </Flex>
                  <Text
                    fontStyle={"italic"}
                    my={"1rem"}
                    fontWeight={"thin"}
                    fontSize={"sm"}
                  >
                    {exp.start_date} - {exp.end_date}
                  </Text>
                  <Box width={{ base: "100%", md: "80%" }} fontSize={"sm"}>
                    {exp.content.document[0].children[0].text}
                  </Box>
                </Box>
              ))}

              <Box
                display={{ base: "none", lg: "block" }}
                my={"3rem"}
                width={{ base: "100%", md: "80%" }}
                fontSize={"md"}
              >
                Open to full-time/ remote opportunities.
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Resume;

Resume.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
