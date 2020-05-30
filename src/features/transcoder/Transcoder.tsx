import React, { FC, ChangeEvent } from "react";
import { Paper, makeStyles, Grid, colors, Box, fade, IconButton, Tooltip } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import Editor from "../../components/Editor";
import { RootState } from "../../app/rootReducer";
import {
  setSourceContent,
  setSourceEncoding,
  setTargetEncoding,
  toggleEncodeDecode,
} from "./transcoderSlice";
import EncodingOptions from "../../components/EncodingOptions";
import { textEncodings, base64Encodings } from "./encodings";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";

const useStyles = makeStyles((theme) => {
  const dividerBorder =
    theme.palette.type === "dark" ? `2px solid ${colors.grey[800]}` : `2px solid ${colors.grey[200]}`;
  const bgBase = theme.palette.type === "dark" ? "#fff" : "#000";

  return {
    container: {
      minHeight: 450,
    },
    tabsWrapper: {
      display: "flex",
      boxShadow: theme.shadows[1],
    },
    encodingOptions: {
      minWidth: 300,
      flexGrow: 1,
    },
    editorWrapper: {
      flexGrow: 1,
      height: "100%",
    },
    leftEdidor: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderRight: dividerBorder,
    },
    rightEdidor: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      background: fade(bgBase, 0.04),
    },
  };
});

const Transcoder: FC = () => {
  const styles = useStyles();
  const { isEncoding, sourceContent, sourceEncoding, targetEncoding } = useSelector(
    (state: RootState) => state.transcoder
  );
  const dispatch = useDispatch();

  const changeSourceContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setSourceContent(event.target.value));
  };

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
    <Paper className={styles.editorWrapper} elevation={4}>
      <Box className={styles.tabsWrapper}>
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
      <Grid container className={styles.container}>
        <Grid item sm={6}>
          <Editor
            className={styles.leftEdidor}
            value={sourceContent}
            onChange={changeSourceContent}
            placeholder="Your input here..."
            autoFocus
          />
        </Grid>
        <Grid item sm={6}>
          <Editor
            className={styles.rightEdidor}
            value={""}
            onChange={changeSourceContent}
            placeholder="Result shows here"
            disabled
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Transcoder;
