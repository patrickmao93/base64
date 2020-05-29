import React, { FC, ChangeEvent } from "react";
import { Paper, makeStyles, Container, Grid } from "@material-ui/core";
import Editor from "../../components/Editor";
import { RootState } from "../../app/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { setSourceContent } from "./transcoderSlice";

const useStyles = makeStyles({
  container: {
    minHeight: 450,
    height: "100%",
    paddingBottom: "2rem",
  },
  editorWrapper: {
    flexGrow: 1,
    padding: "1rem",
    height: "100%",
  },
});

const selectSourceContent = (state: RootState) => state.transcoder.sourceContent;

const Transcoder: FC = () => {
  const styles = useStyles();
  const sourceContent = useSelector(selectSourceContent);
  const dispatch = useDispatch();

  const handleSourceContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setSourceContent(event.target.value));
  };

  return (
    <Grid container spacing={1} className={styles.container}>
      <Grid item sm={6}>
        <Paper className={styles.editorWrapper} elevation={4}>
          <Editor value={sourceContent} onChange={handleSourceContentChange} />
        </Paper>
      </Grid>
      <Grid item sm={6}>
        <Paper className={styles.editorWrapper} elevation={4}>
          <Editor value={sourceContent} onChange={handleSourceContentChange} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Transcoder;
