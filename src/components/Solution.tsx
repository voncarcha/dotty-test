import { Text, Container, Flex, Heading, Box, Stack } from "@chakra-ui/react";
import React from "react";

const Solution = () => {
  return (
    <Flex minH="100vh" alignItems="center" justifyContent="center" py="50px">
      <Container maxW="1000px">
        <Heading
          variant="section-title"
          textAlign="center"
          as="h1"
          mb={6}
          mt={{ base: "75px", md: 0 }}
        >
          Solution
        </Heading>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: 0, lg: "50px" }}
          alignItems="flex-start"
        >
          <Box flex="1">
            <Text variant="section-text" mb={4}>
              We knew movies rated high on the list of our target&apos;s
              interests and, with incredible beaches, seaplanes, yachts and
              glamorous locations, the Whitsundays is the perfect settings for a
              movie.
            </Text>
            <Text variant="section-text" mb={4}>
              So we invited Australians to write it:
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "20px", md: "24px" }}
              color="white"
              mb={4}
            >
              The Whitsundays.
              <br />A movie that&apos;s waiting to be written.
            </Heading>
            <Text variant="section-text" mb={4}>
              We enlisted world-renowned screenwriter Craig Pearce as Script
              Supervisor. Then for 20 days we posted daily storyboard image on
              Facebook and Instagram, inviting the public to write scenes for a
              chance to win a $10,000 luxury holiday.
            </Text>
          </Box>
          <Box flex="1">
            <Text variant="section-text" mb={4}>
              The campaign launched with a traitor, radio and online
              advertising.
            </Text>
            <Text variant="section-text" mb={4}>
              We reacted to the storyline as it developed, selecting and
              treating images according to the previous winning scene.
            </Text>
            <Text variant="section-text" mb={4}>
              Each scene written and shared became a compelling &quot;ad&quot;
              for the Whitsundays.
            </Text>
            <Text variant="section-text" mb={4}>
              Together, a Hollywood screenwriter and the Australian public had
              created world&apos;s first crowd-sources movie storyboard and a
              story universe with millions of possible permutations.
            </Text>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Solution;
