import {ReactElement, useEffect} from "react";
import {Formik, Form} from "formik";
import {
  Box,
  Flex,
  Text,
  Input,
  Textarea,
  FormControl,
  Button,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import {useQuery, useMutation} from "@apollo/client";
import Layout from "../components/Layout";
import {SUBMIT_CONTACT_FORM} from "../utilities/gqlQueries";
import {MessageSchema} from "../utilities/schema";
import Head from "next/head";
import {Message} from "../types";

const Contact = () => {
  const toast = useToast();

  const [createcontact, {loading, error, data}] = useMutation(SUBMIT_CONTACT_FORM);

  const initialValues: Message = {
    name: "",
    email: "",
    message: "",
  };

  useEffect(() => {
    if (data) {
      toast({
        title: "Message Sent",
        description:
          "Thank you for reaching out to me. I will get back to you as soon as possible.",
        status: "success",
        duration: 5000,
        isClosable: true,
        variant: "top-accent",
      });
    } else if (error) {
      toast({
        title: "Error",
        description: `Oops!, ${error.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
        variant: "top-accent",
      });
    }
  }, [data, error]);

  return (
    <>
      <Head>
        <title>Contact - Dumto Imoh</title>
        <meta property="og:title" content="Contact us" key="title" />
        <meta
          property="og:description"
          content="Want to engage with me? Feel free to reach out to me"
          key="description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box padding={"2rem"} height={"95vh"} bg="black" color="white">
        <Flex direction={"column"} alignItems={"center"} justifyContent={"center"}>
          <Text fontSize={"2xl"}>
            {"<"}Contact{">"}
          </Text>
          <Text fontStyle={"italic"} fontSize={"md"}>
            You wanna reach out to me 💌
          </Text>
        </Flex>

        <Formik
          validationSchema={MessageSchema}
          initialValues={initialValues}
          onSubmit={(values, {resetForm}) => {
            createcontact({
              variables: {...values},
            });
          }}
        >
          {({
            values: details,
            handleSubmit,
            handleChange,
            handleBlur,
            errors,
            touched,
          }) => (
            <Form
              target="_blank"
              action="https://formsubmit.co/79cbc62b7a389a7bcd738137fa46c366"
              method="POST"
              onSubmit={handleSubmit}
            >
              <Box
                textAlign={"center"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                marginTop={"5rem"}
              >
                <FormControl id="name">
                  <Input
                    disabled={loading}
                    id="name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={details.name}
                    variant="filled"
                    placeholder="Enter Name"
                    size="lg"
                    width={{base: "100%", md: "70%", xl: "40%"}}
                  />
                  <FormHelperText color="red">
                    {errors.name && touched.name && errors.name}
                  </FormHelperText>
                </FormControl>

                <FormControl id="email">
                  <Input
                    disabled={loading}
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={details.email}
                    onBlur={handleBlur}
                    variant="filled"
                    placeholder="Enter Email address"
                    size="lg"
                    width={{base: "100%", md: "70%", xl: "40%"}}
                    marginTop={"2rem"}
                  />
                  <FormHelperText color="red">
                    {errors.email && touched.email && errors.email}
                  </FormHelperText>
                </FormControl>

                <FormControl id="message">
                  <Textarea
                    id="message"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={details.message}
                    variant="filled"
                    placeholder="Amazing Portfolio, I'd like you to work with my team on a project ………"
                    width={{base: "100%", md: "70%", xl: "40%"}}
                    size="lg"
                    height={"8rem"}
                    marginTop={"2rem"}
                    disabled={loading}
                  />
                  <FormHelperText color="red">
                    {errors.message && touched.message && errors.message}
                  </FormHelperText>
                </FormControl>
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
                <Button
                  mt={4}
                  width={{base: "100%", md: "50%", xl: "15%"}}
                  color={"primary"}
                  size={"md"}
                  background={"secondary.100"}
                  isLoading={!!loading}
                  type="submit"
                >
                  Send Message
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Contact;

Contact.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
