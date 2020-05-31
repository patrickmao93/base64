import React, { FC, useEffect } from "react";
import { Paper, makeStyles, Grid } from "@material-ui/core";
import Editor from "./Editor";
import TrancoderHeader from "./TranscoderHeader";
import Result from "./Result";
import { useDispatch, useSelector } from "react-redux";
import transcode from "./transcode";
import { RootState } from "../../app/rootReducer";

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
  const dispatch = useDispatch();
  const { isEncoding, sourceContent, sourceEncoding, targetEncoding } = useSelector(
    (state: RootState) => state.transcoder
  );

  useEffect(() => {
    dispatch(transcode());
  }, [isEncoding, sourceContent, sourceEncoding, targetEncoding, dispatch]);

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
