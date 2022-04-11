import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import About from "components/About";
import Header from "components/Header";
import Solution from "components/Solution";
import Footer from "components/Footer";
import { useRef, useState } from "react";
import useScrollSpy from "react-use-scrollspy";
import SideNav from "components/SideNav";
import TopNav from "components/TopNav";

const Home: NextPage = () => {
  const [isPlayerVisible, setPlayerVisible] = useState(false);

  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  });

  return (
    <Box
      as="main"
      bgImage="url('/images/bg.jpg')"
      bgSize={{ base: "contain", xl: "cover" }}
      bgRepeat="no-repeat"
      bgColor="#17536F"
      bgPosition={{ base: "left 75px", md: "top right" }}
    >
      <TopNav
        isPlayerVisible={isPlayerVisible}
        setPlayerVisible={setPlayerVisible}
        activeSection={activeSection}
      />
      <SideNav activeSection={activeSection} />
      <section ref={sectionRefs[0]} id="section-1">
        <Header
          isPlayerVisible={isPlayerVisible}
          setPlayerVisible={setPlayerVisible}
        />
      </section>
      <section ref={sectionRefs[1]} id="section-2">
        <About />
      </section>
      <section ref={sectionRefs[2]} id="section-3">
        <Solution />
      </section>
      <section ref={sectionRefs[3]} id="section-4">
        <Footer />
      </section>
    </Box>
  );
};

export default Home;
