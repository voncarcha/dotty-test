import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      "*:focus": {
        outline: "none",
        boxShadow: "none !important",
      },
    },
  }),
};

export default styles;
