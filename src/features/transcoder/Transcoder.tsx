import React, { FC, ChangeEvent } from "react";
import { Paper } from "@material-ui/core";
import Editor from "../../components/Editor";
import { RootState } from "../../app/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { setSourceContent } from "./transcoderSlice";

const selectSourceContent = (state: RootState) => state.transcoder.sourceContent;

const Transcoder: FC = () => {
  const sourceContent = useSelector(selectSourceContent);
  const dispatch = useDispatch();

  const handleSourceContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setSourceContent(event.target.value));
  };

  return (
    <Paper>
      <Editor value={sourceContent} onChange={handleSourceContentChange} />
    </Paper>
  );
};

export default Transcoder;
