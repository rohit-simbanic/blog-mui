import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Fira Sans", "sans-serif"].join(","),
    h2: {
      fontSize: "40px",
    },
    h3: {
      fontSize: "30px",
    },
    h5: {
      fontSize: "20px",
    },
    subtitle1: {
      fontSize: "15px",
    },
  },
  // it is use to change the HTML tag which wraps text
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h1",
          h3: "h1",
          h4: "h1",
          h5: "h1",
          h6: "h1",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#26a69a",
    },
    secondary: {
      main: "#000000de",
    },
  },
});

export default theme;
