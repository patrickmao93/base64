import React, { FC } from "react";
import { makeStyles, darken, Box } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/rootReducer";
import Textarea from "../../components/Textarea";

const useStyles = makeStyles((theme) => {
  const background =
    theme.palette.type === "dark"
      ? darken(theme.palette.background.paper, 0.1)
      : darken(theme.palette.background.default, 0.01);
  return {
    wrapper: {},
    textarea: {
      background,
      borderBottomRightRadius: 8,
    },
  };
});

const Result: FC = () => {
  const styles = useStyles();
  const { targetContent } = useSelector((state: RootState) => state.transcoder);
  const dispatch = useDispatch();

  return (
    <Box className={styles.wrapper}>
      <Textarea
        className={styles.textarea}
        value={targetContent}
        placeholder="Result shows here"
        rowsMin={10}
        disabled
        onClickCopy
      />
    </Box>
  );
};

export default Result;
