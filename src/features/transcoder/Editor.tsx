import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { useDebouncedCallback } from "use-debounce";

import { setSourceContent } from "./transcoderSlice";
import Textarea from "../../components/Textarea";
import transcode from "./transcode";

const Editor: FC = () => {
  const dispatch = useDispatch();
  const { sourceContent } = useSelector((state: RootState) => state.transcoder);

  const [handleTrancode] = useDebouncedCallback(() => {
    dispatch(transcode());
  }, 100);

  const changeSourceContent = (value: string) => {
    dispatch(setSourceContent(value));
    handleTrancode();
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
      autoFocus
    />
  );
};

export default Editor;
