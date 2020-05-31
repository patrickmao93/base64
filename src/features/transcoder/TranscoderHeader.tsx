import React, { FC, ChangeEvent } from "react";
import { Box, Tooltip, IconButton, makeStyles } from "@material-ui/core";
import EncodingOptions from "../../components/EncodingOptions";
import { textEncodings, base64Encodings } from "./encodings";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { setSourceEncoding, setTargetEncoding, toggleEncodeDecode } from "./transcoderSlice";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";

const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      display: "flex",
      position: "relative",
      zIndex: 1,
      boxShadow: theme.shadows[1],
    },
    encodingOptions: {
      minWidth: 300,
      flexGrow: 1,
    },
  };
});

const TrancoderHeader: FC = () => {
  const { sourceEncoding, targetEncoding, isEncoding } = useSelector((state: RootState) => state.transcoder);
  const styles = useStyles();
  const dispatch = useDispatch();

  const changeSourceEncoding = (_: ChangeEvent<{}>, newValue: string) => {
    dispatch(setSourceEncoding(newValue));
  };

  const changeTargetEncoding = (_: ChangeEvent<{}>, newValue: string) => {
    dispatch(setTargetEncoding(newValue));
  };

  const changeMode = () => {
    dispatch(toggleEncodeDecode());
  };

  return (
    <Box className={styles.wrapper}>
      <EncodingOptions
        className={styles.encodingOptions}
        tabs={isEncoding ? textEncodings : base64Encodings}
        selected={sourceEncoding}
        onChange={changeSourceEncoding}
      />
      <Tooltip title="Switch mode" arrow>
        <IconButton onClick={changeMode}>
          <SwapHorizIcon />
        </IconButton>
      </Tooltip>
      <EncodingOptions
        className={styles.encodingOptions}
        tabs={isEncoding ? base64Encodings : textEncodings}
        selected={targetEncoding}
        onChange={changeTargetEncoding}
      />
    </Box>
  );
};

export default TrancoderHeader;
