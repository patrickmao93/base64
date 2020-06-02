import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";

import { setSourceContent } from "./transcoderSlice";
import Textarea from "../../components/Textarea";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => {
  return {
    textarea: {
      borderBottomLeftRadius: 8,
    },
  };
});

const Editor: FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { sourceContent } = useSelector((state: RootState) => state.transcoder);

  const changeSourceContent = (value: string) => {
    dispatch(setSourceContent(value));
  };

  const handleClearClick = useCallback(() => {
    dispatch(setSourceContent(""));
  }, [dispatch]);

  return (
    <Textarea
      className={styles.textarea}
      value={sourceContent}
      onChange={changeSourceContent}
      onClear={handleClearClick}
      placeholder="Your input here..."
      rowsMin={10}
      autoFocus
    />
  );
};

export default Editor;
