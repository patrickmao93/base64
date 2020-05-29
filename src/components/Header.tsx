import { AppBar, Container, IconButton, makeStyles, Toolbar, Tooltip, Typography, useTheme } from "@material-ui/core";
import React from "react";
import ThemeToggle from "../features/theme/ThemeToggle";
import { GitHubIcon } from "./Icons";

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
}));

const Header = () => {
  const styles = useStyles();

  return (
    <AppBar className={styles.appBar} color="transparent" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography className={styles.title} variant="h6" noWrap display="inline">
            base64{" "}
            <Typography className={styles.title} variant="subtitle1" noWrap display="inline">
              encode/decode
            </Typography>
          </Typography>
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
