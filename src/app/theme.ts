import { colors, createMuiTheme } from "@material-ui/core";

const createTheme = (darkTheme: boolean) =>
  createMuiTheme({
    palette: {
      type: darkTheme ? "dark" : "light",
      primary: colors.blue,
      secondary: colors.pink,
    },
    typography: {
      fontFamily: "SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    },
  });

export default createTheme;
