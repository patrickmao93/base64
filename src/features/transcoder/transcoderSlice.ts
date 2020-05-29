import { createSlice } from "@reduxjs/toolkit";

enum Encodings {
  "utf-8",
  "base64",
}

interface TranscoderState {
  sourceContent: string;
  sourceEncoding: Encodings;
  targetEncoding: Encodings;
}

const initialState: TranscoderState = {
  sourceContent: "",
  sourceEncoding: Encodings["utf-8"],
  targetEncoding: Encodings.base64,
};

const transcoderSlice = createSlice({
  name: "transcoder",
  initialState,
  reducers: {
    setSourceContent(state, { payload }) {
      state.sourceContent = payload.content;
    },
    setSourceEncoding(state, { payload }) {
      state.sourceEncoding = payload.encoding;
    },
    setTargetEncoding(state, { payload }) {
      state.targetEncoding = payload.encoding;
    },
  },
});

export const { setSourceContent } = transcoderSlice.actions;

export default transcoderSlice.reducer;
