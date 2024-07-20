import { Box, Text } from "@chakra-ui/react";

const Footer = () => (
  <Box
    textAlign="center"
    p="5"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.100"
    bg="gray.50"
  >
    <Text fontSize="lg" mb="2">
      Contact:{" "}
      <Text as="span" color="gray.800" fontWeight="bold">
        Lucifer Morningstar - 122-3007
      </Text>
    </Text>
    <Text fontSize="sm">
      &copy; {new Date().getFullYear()} Dream House, Inc. All rights reserved.
    </Text>
  </Box>
);

export default Footer;
