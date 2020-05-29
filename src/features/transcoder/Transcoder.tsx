import React, { FC, ChangeEvent } from "react";
import { Paper, makeStyles } from "@material-ui/core";
import Editor from "../../components/Editor";
import { RootState } from "../../app/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { setSourceContent } from "./transcoderSlice";

const useStyles = makeStyles({
  wrapper: {
    flexGrow: 1,
    marginBottom: "2rem",
    minHeight: 450,
    padding: "1rem",
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
    <Paper className={styles.wrapper} elevation={6}>
      <Editor value={sourceContent} onChange={handleSourceContentChange} />
    </Paper>
  );
};

export default Transcoder;
