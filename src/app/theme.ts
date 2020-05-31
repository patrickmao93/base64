import { colors, createMuiTheme } from "@material-ui/core";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1440,
  },
};

const typography = {
  fontFamily: "SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace",
};

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: colors.blue,
    background: {
      default: colors.grey[100],
      paper: "#fff",
    },
  },
  typography,
  breakpoints,
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: colors.blue,
    background: {
      default: colors.grey[900],
      paper: colors.grey[800],
    },
  },
  typography,
  breakpoints,
});

const createTheme = (darkMode: boolean) => {
  if (darkMode) {
    return darkTheme;
  }
  return lightTheme;
};

export default createTheme;
