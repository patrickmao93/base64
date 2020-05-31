import React, { FC, ChangeEvent } from "react";
import { setSourceContent } from "./transcoderSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import Textarea from "../../components/Textarea";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => {
  return {
    textarea: {
      borderBottomLeftRadius: 4,
    },
  };
});

const Editor: FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { sourceContent } = useSelector((state: RootState) => state.transcoder);

  const changeSourceContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setSourceContent(event.target.value));
  };

  return (
    <Textarea
      value={sourceContent}
      onChange={changeSourceContent}
      placeholder="Your input here..."
      className={styles.textarea}
      autoFocus
    />
  );
};

export default Editor;
