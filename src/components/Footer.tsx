import {
  Box,
  Button,
  Center,
  Container,
  css,
  Flex,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";

const SELECTED = {
  bg: "#1e4456",
  borderRadius: "5px",
};

const Footer = () => {
  return (
    <Flex minH="100vh" alignItems="center" justifyContent="center" py="50px">
      <Container maxW="1000px" minH="300px">
        <Center>
          <Tabs variant="unstyled" overflowX="auto">
            <TabList
              justifyContent={{ base: "initial", sm: "center" }}
              mb={4}
              overflowX="auto"
              css={css({
                scrollbarWidth: "none",
                WebkitOverflowScrolling: "touch",
                border: "0 none",
              })}
            >
              <Tab _selected={SELECTED} color="white">
                Video
              </Tab>
              <Tab _selected={SELECTED} color="white">
                Photography
              </Tab>
              <Tab _selected={SELECTED} color="white">
                Social
              </Tab>
              <Tab _selected={SELECTED} color="white">
                PR
              </Tab>
              <Tab _selected={SELECTED} color="white">
                Radio
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Stack
                  direction={{ base: "column", lg: "row" }}
                  spacing={{ base: "20px", md: "50px" }}
                >
                  <Box
                    width={{ base: "100%", sm: "403px" }}
                    height="159px"
                    background="black"
                    borderRadius="5px"
                    m="auto"
                  />
                  <VStack alignItems="flex-start">
                    <Text
                      variant="section-text"
                      maxW={{ base: "100%", lg: "242px" }}
                      mb={4}
                    >
                      Enim quis eu est Lorem ad id qui esse quis aliquip id non
                      nostrud. In exercitation commodo elit pariatur id.
                    </Text>
                    <Button
                      variant="solid"
                      bgColor="#178bc1"
                      color="white"
                      w="198px"
                      _hover={{ bgColor: "#178bc1", opacity: 0.8 }}
                    >
                      View Project
                    </Button>
                  </VStack>
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack
                  direction={{ base: "column", lg: "row" }}
                  spacing={{ base: "20px", md: "50px" }}
                >
                  <Box
                    width={{ base: "100%", sm: "403px" }}
                    height="159px"
                    background="black"
                    borderRadius="5px"
                    m="auto"
                  />
                  <VStack alignItems="flex-start">
                    <Text
                      variant="section-text"
                      maxW={{ base: "100%", lg: "242px" }}
                      mb={4}
                    >
                      Elit Lorem irure eu nostrud magna irure magna non amet
                      culpa. Nostrud ex deserunt ex aute.
                    </Text>
                    <Button
                      variant="solid"
                      bgColor="#178bc1"
                      color="white"
                      w="198px"
                      _hover={{ bgColor: "#178bc1", opacity: 0.8 }}
                    >
                      View Project
                    </Button>
                  </VStack>
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack
                  direction={{ base: "column", lg: "row" }}
                  spacing={{ base: "20px", md: "50px" }}
                >
                  <Box
                    width={{ base: "100%", sm: "403px" }}
                    height="159px"
                    background="black"
                    borderRadius="5px"
                    m="auto"
                  />

                  <VStack alignItems="flex-start">
                    <Text
                      variant="section-text"
                      maxW={{ base: "100%", lg: "242px" }}
                      mb={4}
                    >
                      Deserunt eu est nostrud adipisicing. Labore cupidatat
                      culpa aliquip excepteur incididunt exercitation.
                    </Text>
                    <Button
                      variant="solid"
                      bgColor="#178bc1"
                      color="white"
                      w="198px"
                      _hover={{ bgColor: "#178bc1", opacity: 0.8 }}
                    >
                      View Project
                    </Button>
                  </VStack>
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack
                  direction={{ base: "column", lg: "row" }}
                  spacing={{ base: "20px", md: "50px" }}
                >
                  <Box
                    width={{ base: "100%", sm: "403px" }}
                    height="159px"
                    background="black"
                    borderRadius="5px"
                    m="auto"
                  />

                  <VStack alignItems="flex-start">
                    <Text
                      variant="section-text"
                      maxW={{ base: "100%", lg: "242px" }}
                      mb={4}
                    >
                      Fugiat consequat veniam occaecat nostrud exercitation
                      adipisicing ea reprehenderit. Non aliquip fugiat sit.
                    </Text>
                    <Button
                      variant="solid"
                      bgColor="#178bc1"
                      color="white"
                      w="198px"
                      _hover={{ bgColor: "#178bc1", opacity: 0.8 }}
                    >
                      View Project
                    </Button>
                  </VStack>
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack
                  direction={{ base: "column", lg: "row" }}
                  spacing={{ base: "20px", md: "50px" }}
                >
                  <Box
                    width={{ base: "100%", sm: "403px" }}
                    height="159px"
                    background="black"
                    borderRadius="5px"
                    m="auto"
                  />
                  <VStack alignItems="flex-start">
                    <Text
                      variant="section-text"
                      maxW={{ base: "100%", lg: "242px" }}
                      mb={4}
                    >
                      Enim labore duis dolore ea dolore ad. Cillum elit quis
                      sunt reprehenderit consequat incididunt.
                    </Text>
                    <Button
                      variant="solid"
                      bgColor="#178bc1"
                      color="white"
                      w="198px"
                      _hover={{ bgColor: "#178bc1", opacity: 0.8 }}
                    >
                      View Project
                    </Button>
                  </VStack>
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Center>
      </Container>
    </Flex>
  );
};

export default Footer;
