import React, { FC } from "react";
import { makeStyles, fade, darken, lighten } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/rootReducer";
import Textarea from "../../components/Textarea";

const useStyles = makeStyles((theme) => {
  const background =
    theme.palette.type === "dark"
      ? darken(theme.palette.background.paper, 0.15)
      : darken(theme.palette.background.default, 0.01);
  return {
    textarea: {
      borderBottomRightRadius: 4,
      background,
    },
  };
});

const Result: FC = () => {
  const styles = useStyles();
  const { targetContent } = useSelector((state: RootState) => state.transcoder);
  const dispatch = useDispatch();

  return (
    <Textarea className={styles.textarea} value={targetContent} placeholder="Result shows here" disabled />
  );
};

export default Result;
