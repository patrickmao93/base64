import React, { FC, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { useDebouncedCallback } from "use-debounce";
import { makeStyles } from "@material-ui/core";

import { setSourceContent } from "./transcoderSlice";
import Textarea from "../../components/Textarea";
import transcode from "./transcode";

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

  const [handleTrancode] = useDebouncedCallback(() => {
    dispatch(transcode());
  }, 100);

  const changeSourceContent = (value: string) => {
    dispatch(setSourceContent(value));
    handleTrancode();
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
