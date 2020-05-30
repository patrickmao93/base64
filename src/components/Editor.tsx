import React, { FC } from "react";
import { makeStyles, InputBase, InputBaseProps } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(() => {
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
