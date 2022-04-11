import { extendTheme } from "@chakra-ui/react";
import breakpoints from "./breakpoints";
import styles from "./styles";
import fonts from "./fonts";
import components from "./components";

const overrides = {
  breakpoints,
  fonts,
  styles,
  components,
};

const theme = extendTheme(overrides);

export default theme;
