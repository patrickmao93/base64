import React, { FC, ChangeEvent, useRef, useState, useMemo, useCallback } from "react";
import { makeStyles, InputBase, Tooltip } from "@material-ui/core";
import clsx from "clsx";

interface Props {
  className?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onClickCopy?: boolean;
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
  const { value, onChange, placeholder, autoFocus = false, disabled = false, onClickCopy = false } = props;
  const styles = useStyles();
  const inputRef = useRef<HTMLTextAreaElement>();
  const [copied, setCopied] = useState(false);

  const copyInputContent = useCallback(() => {
    if (!inputRef?.current) {
      return;
    }
    const range = document.createRange();
    range.selectNode(inputRef.current);
    const selections = window.getSelection();
    if (selections) {
      selections.removeAllRanges();
      selections.addRange(range);
      document.execCommand("copy");
      setCopied(true);
    }
  }, [inputRef]);

  const handleTooltipClose = () => {
    setTimeout(() => setCopied(false), 100);
  };

  const onClickCopyProps = useMemo(() => {
    if (onClickCopy && value) {
      return { onClick: copyInputContent, inputRef };
    }
    return {};
  }, [onClickCopy, value, copyInputContent, inputRef]);

  const input = (
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
      {...onClickCopyProps}
    />
  );

  return onClickCopy && value ? (
    <Tooltip title={copied ? "Copied!" : "Click to Copy"} onClose={handleTooltipClose}>
      {input}
    </Tooltip>
  ) : (
    input
  );
};

export default Textarea;
