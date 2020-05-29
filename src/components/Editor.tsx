import React, { FC, ChangeEventHandler, useState } from "react";
import { makeStyles, InputBase, fade, colors, InputBaseProps } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => {
  const bgBase = theme.palette.type === "dark" ? "#fff" : "#000";
  return {
    textarea: {
      height: "100%",
      alignItems: "flex-start",
      background: fade(bgBase, 0.04),
      borderRadius: 3,
      border: "1px solid transparent",
      padding: "1rem",
    },
    focused: {
      border: `1px solid ${fade(colors.blue[500], 0.6)}`,
    },
  };
});

const Editor: FC<InputBaseProps> = (props) => {
  const styles = useStyles();
  const [focused, setFocused] = useState(false);
  return (
    <InputBase
      className={clsx(styles.textarea, focused && styles.focused)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      multiline
      fullWidth
      placeholder="Your input here..."
      {...props}
    />
  );
};

export default Editor;
