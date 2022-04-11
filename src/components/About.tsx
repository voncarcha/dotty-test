import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <Flex minH="100vh" alignItems="center" justifyContent="center" py="50px">
      <Container maxW="1280px">
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "40px", lg: "120px" }}
        >
          <Flex alignItems="center" mt={{ base: "75px", md: 0 }}>
            <Image width={579} height={132} src="/images/logo.png" alt="logo" />
          </Flex>
          <VStack maxW="600px" spacing="40px" alignItems="flex-start">
            <Box>
              <Heading variant="section-title" as="h1">
                Background <br />& Audience
              </Heading>
              <Text variant="section-text" mt={4}>
                Tourism & Events Queensland wanted to increase consideration of
                The Whitsundays amongst &apos;social fun seekers&apos;;
                digitally savvy consumers that socialise substantially online.
              </Text>
            </Box>
            <Box>
              <Heading variant="section-title" as="h1">
                Problem
              </Heading>
              <Text variant="section-text" mt={4}>
                The Whitsundays was losing its cachet as an aspirational holiday
                location.
              </Text>
            </Box>
            <Box>
              <Heading variant="section-title" as="h1">
                Objective
              </Heading>
              <Text variant="section-text" mt={4}>
                Shift perceptions and re-build the Whitsundays&apos; social
                currency as a world-class destination.
              </Text>
            </Box>
          </VStack>
        </Stack>
      </Container>
    </Flex>
  );
};

export default About;
