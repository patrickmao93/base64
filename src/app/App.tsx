import { Container, CssBaseline, ThemeProvider } from "@material-ui/core";
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

const selectDarkMode = (state: RootState) => state.theme.darkMode;
const selectUpdateAvailable = (state: RootState) => state.update.updateAvailable;

const App = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);
  const updateAvailable = useSelector(selectUpdateAvailable);

  const theme = useMemo(() => {
    return createTheme(darkMode);
  }, [darkMode]);

  /**
   * Set initial online status
   */
  useEffect(() => {
    dispatch(updateOnlineStatus(navigator?.onLine));
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <NoScript />
        {updateAvailable && <UpdateNotification />}
        <PersistGate loading={null} persistor={persistor}>
          <div></div>
        </PersistGate>
      </Container>
      <Notifications />
    </ThemeProvider>
  );
};

export default App;
