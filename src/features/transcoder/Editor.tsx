import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";

import { setSourceContent } from "./transcoderSlice";
import Textarea from "../../components/Textarea";

const Editor: FC = () => {
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
