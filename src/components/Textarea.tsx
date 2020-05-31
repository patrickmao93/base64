import React, { FC, ChangeEvent } from "react";
import { makeStyles, InputBase } from "@material-ui/core";
import clsx from "clsx";

interface Props {
  className?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const useStyles = makeStyles(() => {
  return {
    textarea: {
      alignItems: "flex-start",
      height: "100%",
      padding: "2rem",
    },
  };
});

const Textarea: FC<Props> = (props) => {
  const { value, onChange, placeholder, autoFocus = false, disabled = false } = props;
  const styles = useStyles();

  return (
    <InputBase
      value={value}
      onChange={onChange}
      className={clsx(styles.textarea, props.className)}
      autoFocus={autoFocus}
      disabled={disabled}
      placeholder={placeholder}
      spellCheck="false"
      multiline
      fullWidth
    />
  );
};

export default Textarea;
