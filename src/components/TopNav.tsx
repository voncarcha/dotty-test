import {
  Box,
  Flex,
  Text,
  HStack,
  Icon,
  Divider,
  Center,
  Button,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { IoPlaySharp, IoClose } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";

interface Props {
  isPlayerVisible: boolean;
  setPlayerVisible: Dispatch<SetStateAction<boolean>>;
  activeSection: number;
}

const TopNav = ({
  isPlayerVisible,
  setPlayerVisible,
  activeSection,
}: Props) => {
  return (
    <Box
      w="full"
      bgColor="#333333"
      position="fixed"
      top="0"
      left="0"
      zIndex="10"
    >
      <Flex
        maxW="1000px"
        w="100%"
        m="auto"
        alignItems="center"
        justifyContent="space-between"
        px="20px"
        h="75px"
        color="white"
      >
        <HStack>
          <Center
            w="38px"
            h="38px"
            bgColor="#282828"
            borderRadius="10px"
            cursor="pointer"
            role="button"
            mr="10px"
            as="a"
            href="#section-1"
            onClick={() => setPlayerVisible(!isPlayerVisible)}
          >
            {isPlayerVisible ? (
              <Icon as={IoClose} />
            ) : (
              <Icon as={IoPlaySharp} />
            )}
          </Center>
          <HStack display={{ base: "none", lg: "flex" }}>
            <Divider orientation="vertical" height="46px" opacity="0.1" />
            <Text
              as="a"
              href="#section-1"
              px="10px"
              color={activeSection === 0 ? "yellow.100" : "white"}
            >
              Background & Challenge
            </Text>
            <Divider orientation="vertical" height="46px" opacity="0.1" />
            <Text
              as="a"
              href="#section-2"
              px="10px"
              color={activeSection === 1 ? "yellow.100" : "white"}
            >
              Results & Effectiveness
            </Text>
            <Divider orientation="vertical" height="46px" opacity="0.1" />
            <Text
              as="a"
              href="#section-3"
              px="10px"
              color={activeSection === 2 ? "yellow.100" : "white"}
            >
              Solution
            </Text>
            <Divider orientation="vertical" height="46px" opacity="0.1" />
            <Text
              as="a"
              href="#section-4"
              px="10px"
              color={activeSection === 3 ? "yellow.100" : "white"}
            >
              Slideshow
            </Text>
          </HStack>
        </HStack>
        <Button
          leftIcon={<FiDownload />}
          colorScheme="blackAlpha"
          variant="solid"
          size="sm"
        >
          Download Board
        </Button>
      </Flex>
    </Box>
  );
};

export default TopNav;
