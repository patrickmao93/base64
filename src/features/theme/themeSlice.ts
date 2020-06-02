import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "@material-ui/core";

interface ThemeState {
  darkMode: boolean;
}

const initialState: ThemeState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const ifDarkModeElse = (theme: Theme, darkStuff: any, lightStuff: any) => {
  return theme.palette.type === "dark" ? darkStuff : lightStuff;
};

export default themeSlice.reducer;
