import React, { Dispatch, SetStateAction } from "react";
import { AspectRatio, Box } from "@chakra-ui/react";
import Image from "next/image";

interface Props {
  isPlayerVisible: boolean;
  setPlayerVisible: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ isPlayerVisible, setPlayerVisible }: Props) => {
  return (
    <Box minH="100vh" position="relative">
      <Box
        position="absolute"
        top={{ base: "120px", xl: "50%" }}
        left={{ base: "50%", xl: "50px" }}
        transform={{ base: "translate(-50%, 0)", xl: "translate(0,-50%)" }}
      >
        <Image width={579} height={132} src="/images/logo.png" alt="logo" />
      </Box>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
        cursor="pointer"
        _hover={{ opacity: 0.8 }}
      >
        <Image
          width={141}
          height={141}
          src="/images/play.png"
          alt="play"
          onClick={() => setPlayerVisible(true)}
          role="button"
        />
      </Box>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
        cursor="pointer"
        width="100%"
        display={isPlayerVisible ? "block" : "none"}
      >
        <AspectRatio maxW="100%" minH="100vh">
          <iframe
            src="https://www.youtube.com/embed/yDJIcYE32NU?modestbranding=1&showinfo=0"
            frameBorder="0"
          />
        </AspectRatio>
      </Box>
    </Box>
  );
};

export default Header;
