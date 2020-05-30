import {
  AppBar,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Tooltip,
  Typography,
  Box,
  Link,
} from "@material-ui/core";
import React from "react";
import ThemeToggle from "../features/theme/ThemeToggle";
import { GitHubIcon } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleEncodeDecode } from "../features/transcoder/transcoderSlice";
import { RootState } from "../app/rootReducer";
import clsx from "clsx";

export const headerHeight = {
  xs: 64,
  sm: 86,
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("xs")]: {
      height: headerHeight.xs,
    },
    [theme.breakpoints.up("sm")]: {
      height: headerHeight.sm,
    },
  },
  title: {
    flexGrow: 1,
  },
  link: {
    cursor: "pointer",
    textDecoration: "underline",
    padding: "0 3px",
    margin: "0 3px",
    border: `1px solid transparent`,
    transition: "0.2s ease",
  },
  active: {
    color: theme.palette.getContrastText(theme.palette.background.default),
    pointerEvents: "none",
    textDecoration: "none",
    border: `1px solid ${theme.palette.getContrastText(theme.palette.background.default)}`,
    borderRadius: 2,
  },
}));

const Header = () => {
  const styles = useStyles();
  const { isEncoding } = useSelector((state: RootState) => state.transcoder);
  const dispatch = useDispatch();

  return (
    <AppBar className={styles.appBar} color="transparent" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box className={styles.title}>
            <Typography variant="h6" noWrap display="inline">
              base64{" "}
            </Typography>
            <Link
              className={clsx(styles.link, isEncoding && styles.active)}
              variant="subtitle1"
              onClick={() => dispatch(toggleEncodeDecode())}
            >
              encode
            </Link>
            /
            <Link
              className={clsx(styles.link, !isEncoding && styles.active)}
              variant="subtitle1"
              onClick={() => dispatch(toggleEncodeDecode())}
            >
              decode
            </Link>
          </Box>
          <ThemeToggle />
          <Tooltip title="GitHub">
            <IconButton
              color="inherit"
              edge="end"
              component="a"
              href="https://github.com/code2k/ghfresh"
              target="__blank"
              rel="noopener"
              aria-label="github"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
