import React, { FC, ChangeEventHandler } from "react";
import { makeStyles, TextField } from "@material-ui/core";

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const useStyles = makeStyles(() => {
  return {
    textarea: {
      height: "100%",
    },
  };
});

const Editor: FC<IProps> = (props) => {
  const { value, onChange } = props;
  const styles = useStyles();
  return (
    <TextField
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
