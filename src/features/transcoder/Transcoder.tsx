import React, { FC, ChangeEvent } from "react";
import { Paper, makeStyles, Grid, colors, Box, fade, IconButton, Tooltip } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import Editor from "../../components/Editor";
import { RootState } from "../../app/rootReducer";
import { setSourceContent, setSourceEncoding, setTargetEncoding } from "./transcoderSlice";
import EncodingOptions from "../../components/EncodingOptions";
import { encodings } from "./encodings";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";

const useStyles = makeStyles((theme) => {
  const dividerBorder =
    theme.palette.type === "dark" ? `2px solid ${colors.grey[800]}` : `2px solid ${colors.grey[200]}`;
  const bgBase = theme.palette.type === "dark" ? "#fff" : "#000";

  return {
    container: {
      minHeight: 450,
    },
    tabs: {
      display: "flex",
      boxShadow: theme.shadows[1],
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
  const { sourceContent, sourceEncoding, targetEncoding } = useSelector(
    (state: RootState) => state.transcoder
  );
  const dispatch = useDispatch();

  const changeSourceContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setSourceContent(event.target.value));
  };

  const changeSourceEncoding = (_: ChangeEvent<{}>, newValue: number) => {
    dispatch(setSourceEncoding(newValue));
  };

  const changeTargetEncoding = (_: ChangeEvent<{}>, newValue: number) => {
    dispatch(setTargetEncoding(newValue));
  };

  return (
    <Paper className={styles.editorWrapper} elevation={4}>
      <Box className={styles.tabs}>
        <EncodingOptions tabs={encodings} selected={sourceEncoding} onChange={changeSourceEncoding} />
        <Tooltip title="Swap Encodings" arrow>
          <IconButton>
            <SwapHorizIcon />
          </IconButton>
        </Tooltip>
        <EncodingOptions tabs={encodings} selected={targetEncoding} onChange={changeTargetEncoding} />
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
