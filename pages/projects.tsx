import {Badge, Box, Flex, Link, Text, SimpleGrid} from "@chakra-ui/react";
import Head from "next/head";
import {InferGetStaticPropsType} from "next";
import {ReactElement} from "react";
import {query} from ".keystone/api";
import Layout from "../components/Layout";
import {ProjectsSchema} from "../types";

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

const Projects = ({projects}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Projects - Dumto Imoh</title>
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
          <Text fontSize={"md"}>Projects I have worked on 😋</Text>
        </Flex>

        <SimpleGrid
          columns={{base: 1, md: 1, lg: 2, xl: 3, "2xl": 4}}
          flexWrap={"wrap"}
          spacing={"2rem"}
          marginTop={"4rem"}
        >
          {projects.map((project) => (
            <Box
              key={project.id}
              borderRadius={"md"}
              p={{base: "4", md: "4", lg: "8"}}
              bg={"#16161A"}
            >
              <Text fontSize={"lg"} fontWeight={"bold"}>
                {project.name}
              </Text>

              <SimpleGrid
                flexWrap={"wrap"}
                mt={"4"}
                spacing={{base: 2, md: 1}}
                columns={{base: 3, md: 4, lg: 3}}
              >
                {project.badges.map((badge) => (
                  <Badge
                    width={"auto"}
                    textAlign={"center"}
                    size={".5rem"}
                    key={badge.name}
                    borderRadius={"lg"}
                    p={".4rem"}
                    variant="solid"
                    bg={"secondary.200"}
                  >
                    {badge.name}
                  </Badge>
                ))}
              </SimpleGrid>

              <Text fontSize={{base: "md", lg: "small"}} fontWeight={"light"} my={"5"}>
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
