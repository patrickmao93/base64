import { Container, CssBaseline, ThemeProvider, makeStyles, responsiveFontSizes } from "@material-ui/core";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Header, { headerHeight } from "../components/Header";
import NoScript from "../components/NoScript";
import Notifications from "../features/notifications/Notifications";
import { updateOnlineStatus } from "../features/onlineStatus/onlineSlice";
import UpdateNotification from "../features/update/UpdateNotification";
import { RootState } from "./rootReducer";
import { persistor } from "./store";
import createTheme from "./theme";
import Transcoder from "../features/transcoder/Transcoder";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("xs")]: {
      height: `calc(100vh - ${headerHeight.xs}px)`,
    },
    [theme.breakpoints.up("sm")]: {
      height: `calc(100vh - ${headerHeight.sm}px)`,
    },
  },
}));

const selectDarkMode = (state: RootState) => state.theme.darkMode;
const selectUpdateAvailable = (state: RootState) => state.update.updateAvailable;

const App = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);
  const updateAvailable = useSelector(selectUpdateAvailable);

  const theme = useMemo(() => {
    return responsiveFontSizes(createTheme(darkMode));
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
      <Container maxWidth="xl" className={styles.wrapper}>
        <NoScript />
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
