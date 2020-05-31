import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TranscoderState {
  isEncoding: boolean;
  sourceContent: string;
  targetContent: string;
  sourceEncoding: string;
  targetEncoding: string;
}

const initialState: TranscoderState = {
  isEncoding: true,
  sourceContent: "",
  targetContent: "",
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
    setTargetContent: {
      reducer(state, { payload }: PayloadAction<string>) {
        state.targetContent = payload;
      },
      prepare(content) {
        return { payload: content };
      },
    },
    setSourceEncoding: {
      reducer(state, { payload }: PayloadAction<string>) {
        state.sourceEncoding = payload;
      },
      prepare(sourceEncoding: string) {
        return { payload: sourceEncoding };
      },
    },
    setTargetEncoding: {
      reducer(state, { payload }: PayloadAction<string>) {
        state.targetEncoding = payload;
      },
      prepare(targetEncoding: string) {
        return { payload: targetEncoding };
      },
    },
    toggleEncodeDecode(state) {
      state.isEncoding = !state.isEncoding;
      const temp = state.targetEncoding;
      state.targetEncoding = state.sourceEncoding;
      state.sourceEncoding = temp;
    },
  },
});

export const {
  setSourceContent,
  setTargetContent,
  setSourceEncoding,
  setTargetEncoding,
  toggleEncodeDecode,
} = transcoderSlice.actions;

export default transcoderSlice.reducer;
