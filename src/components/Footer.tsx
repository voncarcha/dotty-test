import {
  Box,
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
                  <Text
                    variant="section-text"
                    maxW={{ base: "100%", lg: "242px" }}
                  >
                    Enim quis eu est Lorem ad id qui esse quis aliquip id non
                    nostrud. In exercitation commodo elit pariatur id Lorem
                    labore.
                  </Text>
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack direction={{ base: "column", lg: "row" }} spacing="50px">
                  <Box
                    width={{ base: "100%", sm: "403px" }}
                    height="159px"
                    background="black"
                    borderRadius="5px"
                    m="auto"
                  />
                  <Text
                    variant="section-text"
                    maxW={{ base: "100%", lg: "242px" }}
                  >
                    Elit Lorem irure eu nostrud magna irure magna non amet
                    culpa. Nostrud ex deserunt ex aute. Dolor quis eu irure eu.
                    Ullamco duis excepteur irure nisi ullamco.
                  </Text>
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack direction={{ base: "column", lg: "row" }} spacing="50px">
                  <Box
                    width={{ base: "100%", sm: "403px" }}
                    height="159px"
                    background="black"
                    borderRadius="5px"
                    m="auto"
                  />
                  <Text
                    variant="section-text"
                    maxW={{ base: "100%", lg: "242px" }}
                  >
                    Sunt eu cillum dolore ullamco aute reprehenderit fugiat
                    proident mollit fugiat mollit irure voluptate. Fugiat
                    officia dolor aute amet.
                  </Text>
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack direction={{ base: "column", lg: "row" }} spacing="50px">
                  <Box
                    width={{ base: "100%", sm: "403px" }}
                    height="159px"
                    background="black"
                    borderRadius="5px"
                    m="auto"
                  />
                  <Text
                    variant="section-text"
                    maxW={{ base: "100%", lg: "242px" }}
                  >
                    Quis labore id laboris cillum ad ad reprehenderit velit duis
                    in nulla dolor voluptate. Amet nisi in minim id esse
                    cupidatat quis quis adipisicing officia aliquip. Do veniam
                    cillum do esse.
                  </Text>
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack direction={{ base: "column", lg: "row" }} spacing="50px">
                  <Box
                    width={{ base: "100%", sm: "403px" }}
                    height="159px"
                    background="black"
                    borderRadius="5px"
                    m="auto"
                  />
                  <Text
                    variant="section-text"
                    maxW={{ base: "100%", lg: "242px" }}
                  >
                    Tempor culpa aute veniam laboris officia amet non commodo
                    irure veniam do dolor ea exercitation. Minim ut id irure
                    dolor proident velit voluptate cupidatat. Magna ad est irure
                    sunt occaecat.
                  </Text>
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
