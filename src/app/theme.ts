import { colors, createMuiTheme } from "@material-ui/core";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const createTheme = (darkTheme: boolean) => {
  const palette: PaletteOptions = {
    type: darkTheme ? "dark" : "light",
    primary: colors.blue,
  };
  if (!darkTheme) {
    palette.background = {
      default: colors.blue[100],
    };
  }
  return createMuiTheme({
    palette,
    typography: {
      fontFamily: "SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1440,
      },
    },
  });
};

export default createTheme;
