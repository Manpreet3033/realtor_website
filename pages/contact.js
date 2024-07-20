import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
} from "@chakra-ui/react";

const ContactPage = () => {
  return (
    <Box maxW="600px" mx="auto" p="4">
      <Heading as="h1" size="xl" textAlign="center" mb="8" color="blue.400">
        Contact Us
      </Heading>
      <VStack spacing="4">
        <FormControl id="name" isRequired>
          <FormLabel>Your Name</FormLabel>
          <Input placeholder="Enter your name" />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Your Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl id="message" isRequired>
          <FormLabel>Your Message</FormLabel>
          <Textarea placeholder="Enter your message" />
        </FormControl>
        <Button colorScheme="blue" width="full">
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default ContactPage;
