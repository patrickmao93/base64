import React, { FC, useEffect } from "react";
import { Paper, makeStyles, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce/lib";
import transcode from "./transcode";
import { RootState } from "../../app/rootReducer";
import Editor from "./Editor";
import TrancoderHeader from "./TranscoderHeader";
import Result from "./Result";

const useStyles = makeStyles(() => {
  return {
    wrapper: {
      flexGrow: 1,
      height: "100%",
      borderRadius: 8,
      boxShadow: "0 1px 4px 0 rgba(0,0,0,0.37)",
      borderBottom: "1px solid rgba(0,0,0,0.12)",
    },
    grid: {
      position: "relative",
      zIndex: 0,
    },
  };
});

const selectTranscoder = (state: RootState) => state.transcoder;

const Transcoder: FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { isEncoding, sourceContent, sourceEncoding, targetEncoding } = useSelector(selectTranscoder);

  const [doTranscode] = useDebouncedCallback(() => {
    dispatch(transcode());
  }, 100);

  useEffect(() => {
    doTranscode();
  }, [isEncoding, sourceContent, sourceEncoding, targetEncoding, dispatch, doTranscode]);

  return (
    <Paper className={styles.wrapper}>
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
