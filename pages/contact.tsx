import { ReactElement, useState } from "react";
import { Formik, Form } from "formik";
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
import Layout from "../components/Layout";
// import { SUBMIT_CONTACT_FORM } from "../utilities/gqlQueries";
import { MessageSchema } from "../utilities/schema";
import Head from "next/head";
import { Message } from "../types";

const Contact = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // const [createcontact, {loading, error, data}] = useMutation(SUBMIT_CONTACT_FORM);

  const initialValues: Message = {
    name: "",
    email: "",
    message: "",
  };

  const formSubmit = async (values: Message, { resetForm }: any) => {
    try {
      setIsLoading(true);
      await fetch(`${process.env.NEXT_PUBLIC_EMAIL_URL}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${values.name} - ${values.email} `,
          message: values.message,
        })
      })
      setIsLoading(false);
      resetForm();
      toast({
        title: "Message Sent",
        description:
          "Thank you for reaching out to me. I will get back to you as soon as possible.",
        status: "success",
        duration: 4000,
        isClosable: true,
        variant: "top-accent",
      });
    } catch (err: any) {
      setIsLoading(false);
      toast({
        title: "Error",
        description: `Oops!, ${err}`,
        status: "error",
        duration: 4000,
        isClosable: true,
        variant: "top-accent",
      });
      throw new Error(err);

    }
  }

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
          onSubmit={formSubmit

            // createcontact({
            //   variables: {...values},
            // });
          }
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
                    id="name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={details.name}
                    variant="filled"
                    placeholder="Enter Name"
                    size="lg"
                    width={{ base: "100%", md: "70%", xl: "40%" }}
                    disabled={!!isLoading}
                  />
                  <FormHelperText color="red">
                    {errors.name && touched.name && errors.name}
                  </FormHelperText>
                </FormControl>

                <FormControl id="email">
                  <Input
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={details.email}
                    onBlur={handleBlur}
                    variant="filled"
                    placeholder="Enter Email address"
                    size="lg"
                    width={{ base: "100%", md: "70%", xl: "40%" }}
                    marginTop={"2rem"}
                    disabled={!!isLoading}
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
                    width={{ base: "100%", md: "70%", xl: "40%" }}
                    size="lg"
                    height={"8rem"}
                    marginTop={"2rem"}
                    disabled={!!isLoading}
                  />
                  <FormHelperText color="red">
                    {errors.message && touched.message && errors.message}
                  </FormHelperText>
                </FormControl>
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
                <Button
                  mt={4}
                  width={{ base: "100%", md: "50%", xl: "15%" }}
                  color={"primary"}
                  size={"md"}
                  background={"secondary.100"}
                  isLoading={!!isLoading}
                  type="submit"
                  disabled={!!isLoading}
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
