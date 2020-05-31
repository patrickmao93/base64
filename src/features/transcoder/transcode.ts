import { Base64 } from "js-base64";

// @param se Source Encoding
// @param te Target Encoding
// @param isEncoding Whether this transcoding is to base64 or not
export const transcodeString = (se: string, te: string, isEncoding: boolean, str: string) => {
  if (isEncoding) {
    switch (te) {
      case "base64url":
        return Base64.encodeURI(str);
      case "base64":
        return Base64.encode(str);
      default:
        return null;
    }
  }
  return Base64.decode(str);
};
