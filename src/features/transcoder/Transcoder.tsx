import React, { FC } from "react";
import { Paper, makeStyles, Grid } from "@material-ui/core";
import Editor from "./Editor";
import TrancoderHeader from "./TranscoderHeader";
import Result from "./Result";

const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      flexGrow: 1,
      height: "100%",
    },
    grid: {
      position: "relative",
      zIndex: 0,
      minHeight: 450,
    },
  };
});

const Transcoder: FC = () => {
  const styles = useStyles();

  return (
    <Paper className={styles.wrapper} elevation={3}>
      <TrancoderHeader />
      <Grid container className={styles.grid}>
        <Grid item sm={6}>
          <Editor />
        </Grid>
        <Grid item sm={6}>
          <Result />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Transcoder;
