import { AppThunk } from "../../app/store";
import { Base64 } from "js-base64";
import { setTargetContent } from "./transcoderSlice";

const transcode = (): AppThunk => async (dispatch, getState) => {
  const { transcoder } = getState();
  const { isEncoding, sourceContent, targetEncoding } = transcoder;
  let result;
  if (isEncoding) {
    switch (targetEncoding) {
      case "base64":
        result = Base64.encode(sourceContent);
        break;
      case "base64url":
        result = Base64.encodeURI(sourceContent);
        break;
      default:
        result = "Error";
        break;
    }
  } else {
    result = Base64.decode(sourceContent);
  }
  dispatch(setTargetContent(result));
};

export default transcode;
