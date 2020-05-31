import { colors, createMuiTheme } from "@material-ui/core";
import { Overrides } from "@material-ui/core/styles/overrides";

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

const overrides: Overrides = {
  MuiTooltip: {
    arrow: {
      color: colors.common.black,
    },
    tooltip: {
      fontSize: "0.7rem",
      backgroundColor: colors.common.black,
      fontWeight: "bold",
    },
  },
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
  overrides,
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
  overrides,
});

const createTheme = (darkMode: boolean) => {
  if (darkMode) {
    return darkTheme;
  }
  return lightTheme;
};

export default createTheme;
