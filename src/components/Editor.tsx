import React, { FC, ChangeEventHandler } from "react";
import { makeStyles, InputBase, fade, colors } from "@material-ui/core";

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

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
      "&::focus": {
        borderColor: colors.blue[500],
      },
    },
  };
});

const Editor: FC<IProps> = (props) => {
  const { value, onChange } = props;
  const styles = useStyles();
  return (
    <InputBase
      value={value}
      onChange={onChange}
      className={styles.textarea}
      multiline
      fullWidth
      placeholder="Enter something..."
    />
  );
};

export default Editor;
