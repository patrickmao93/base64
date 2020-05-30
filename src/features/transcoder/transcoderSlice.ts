import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TranscoderState {
  sourceContent: string;
  sourceEncoding: string;
  targetEncoding: string;
}

const initialState: TranscoderState = {
  sourceContent: "",
  sourceEncoding: "utf8",
  targetEncoding: "base64",
};

const transcoderSlice = createSlice({
  name: "transcoder",
  initialState,
  reducers: {
    setSourceContent: {
      reducer(state, { payload }: PayloadAction<string>) {
        state.sourceContent = payload;
      },
      prepare(content) {
        return { payload: content };
      },
    },
    setSourceEncoding: {
      reducer(state, { payload }: PayloadAction<string>) {
        state.sourceEncoding = payload;
      },
      prepare(content) {
        return { payload: content };
      },
    },
    setTargetEncoding: {
      reducer(state, { payload }: PayloadAction<string>) {
        state.targetEncoding = payload;
      },
      prepare(content) {
        return { payload: content };
      },
    },
    swapSourceTargetEncoding(state) {
      const oldTargetEncoding = state.targetEncoding;
      state.targetEncoding = state.sourceEncoding;
      state.sourceEncoding = oldTargetEncoding;
    },
  },
});

export const { setSourceContent, setSourceEncoding, setTargetEncoding } = transcoderSlice.actions;

export default transcoderSlice.reducer;
