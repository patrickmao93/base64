import React, { FC, useRef, useState, useMemo, useCallback, useEffect, ChangeEvent } from "react";
import { makeStyles, InputBase, Tooltip, InputBaseProps } from "@material-ui/core";
import clsx from "clsx";
import { insertAtCursor } from "../utils/dom";

interface Props extends Omit<InputBaseProps, "onChange"> {
  value: string;
  onChange?: (value: string) => void;
  onClickCopy?: boolean;
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

const TAB_CHAR = "  ";

const Textarea: FC<Props> = (props) => {
  const { className, value, onChange = () => {}, onClickCopy = false, ...restProps } = props;
  const styles = useStyles();
  const inputRef = useRef<HTMLTextAreaElement>();
  const [copied, setCopied] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  const keyEventListener = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // TAB key pressed
    if (e.keyCode === 9) {
      e.preventDefault();
      insertAtCursor(TAB_CHAR, inputRef.current);
    }
  };

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
  }, []);

  const handleTooltipClose = () => {
    setTimeout(() => setCopied(false), 200);
  };

  const onClickCopyProps = useMemo(() => {
    if (onClickCopy && value) {
      return { onClick: copyInputContent };
    }
    return {};
  }, [onClickCopy, value, copyInputContent]);

  const input = (
    <InputBase
      value={value}
      onChange={handleChange}
      inputRef={inputRef}
      className={clsx(styles.textarea, props.className)}
      spellCheck="false"
      onKeyDown={keyEventListener}
      multiline
      fullWidth
      {...onClickCopyProps}
      {...restProps}
    />
  );

  return onClickCopy && value ? (
    <Tooltip title={copied ? "Copied!" : "Click to Copy"} onClose={handleTooltipClose} arrow>
      {input}
    </Tooltip>
  ) : (
    input
  );
};

export default Textarea;
