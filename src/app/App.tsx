import { Container, CssBaseline, ThemeProvider, responsiveFontSizes, colors } from "@material-ui/core";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Header from "../components/Header";
import NoScript from "../components/NoScript";
import Notifications from "../features/notifications/Notifications";
import { updateOnlineStatus } from "../features/onlineStatus/onlineSlice";
import UpdateNotification from "../features/update/UpdateNotification";
import { RootState } from "./rootReducer";
import { persistor } from "./store";
import createTheme from "./theme";
import Transcoder from "../features/transcoder/Transcoder";

const selectDarkMode = (state: RootState) => state.theme.darkMode;
const selectUpdateAvailable = (state: RootState) => state.update.updateAvailable;

const App = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);
  const updateAvailable = useSelector(selectUpdateAvailable);

  const theme = useMemo(() => {
    return responsiveFontSizes(createTheme(darkMode));
  }, [darkMode]);

  useEffect(() => {
    dispatch(updateOnlineStatus(navigator?.onLine));
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl">
        <NoScript />
        <div
          style={{
            width: "100%",
            position: "absolute",
            content: '""',
            zIndex: -1,
            top: 0,
            left: 0,
            height: 380,
          }}
        />
        {updateAvailable && <UpdateNotification />}
        <PersistGate loading={null} persistor={persistor}>
          <Transcoder />
        </PersistGate>
      </Container>
      <Notifications />
    </ThemeProvider>
  );
};

export default App;
