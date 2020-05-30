import React, { FC, ChangeEventHandler, useState } from "react";
import { makeStyles, InputBase, fade, colors, InputBaseProps } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => {
  return {
    textarea: {
      height: "100%",
      alignItems: "flex-start",
      borderRadius: 3,
      border: "1px solid transparent",
      padding: "2rem",
    },
  };
});

const Editor: FC<InputBaseProps> = (props) => {
  const styles = useStyles();
  return (
    <InputBase
      multiline
      fullWidth
      placeholder="Your input here..."
      {...props}
      className={clsx(styles.textarea, props.className)}
    />
  );
};

export default Editor;
