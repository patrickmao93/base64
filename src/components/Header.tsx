import { AppBar, Container, IconButton, makeStyles, Toolbar, Tooltip, Typography } from "@material-ui/core";
import React from "react";
import ThemeToggle from "../features/theme/ThemeToggle";
import { GitHubIcon } from "./Icons";

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} color="transparent" position="sticky">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography className={classes.title} variant="h6" noWrap>
            base64 encode/decode
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
