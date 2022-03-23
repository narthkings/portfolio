import { Badge, Box, Flex, Link, Text, SimpleGrid, Wrap, WrapItem } from "@chakra-ui/react";
import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { ReactElement } from "react";
import { query } from ".keystone/api";
import Layout from "../components/Layout";
import { ProjectsSchema } from "../types";

export const getStaticProps = async () => {
  const projects = (await query.portfolioProject.findMany({
    query: "id name description projectUrl badges{name}",
  })) as ProjectsSchema[];
  return {
    props: {
      projects,
    },
  };
};

const Projects = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Projects - Dumto Imoh</title>
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_IMAGE}`} />
        <meta property="og:title" content="Projects" key="title" />
        <meta
          property="og:description"
          content="Hands on Projects I have worked on"
          key="description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box padding={"2rem"} color={"white"} bg={"primary"} minHeight={"92vh"}>
        <Flex direction={"column"} alignItems={"center"} justifyContent={"center"}>
          <Text fontSize={"2xl"}>
            {"<"}Projects{">"}
          </Text>
          <Text fontSize={"md"}>Projects I have worked on 👨🏾‍💻</Text>
        </Flex>

        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 2, xl: 3, "2xl": 4 }}
          flexWrap={"wrap"}
          spacing={"2rem"}
          marginTop={"4rem"}
        >
          {projects.map((project) => (
            <Box
              key={project.id}
              borderRadius={"md"}
              p={{ base: "4", md: "4", lg: "8" }}
              bg={"#16161A"}
              data-aos="flip-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Text fontSize={"lg"} fontWeight={"bold"}>
                {project.name}
              </Text>

              <Wrap mt={2}>
                {project.badges.map((badge) => (
                  <WrapItem key={badge.name}>
                    <Badge
                      textAlign={"center"}
                      size={".5rem"}

                      borderRadius={"md"}
                      p={".4rem"}
                      variant="subtle"
                      bg={"secondary.200"}
                      color={"white"}
                    >
                      {badge.name}
                    </Badge>
                  </WrapItem>
                ))}
              </Wrap>

              <Text fontSize={{ base: "md", lg: "small" }} fontWeight={"light"} my={"5"}>
                {project.description}
              </Text>
              <Link
                textDecoration={"underline"}
                color={"secondary.100"}
                href={project.projectUrl}
                isExternal
              >
                {project.name}
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Projects;
Projects.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
