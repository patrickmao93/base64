import React, { FC, useRef, useState, useMemo, useCallback, ChangeEvent } from "react";
import { makeStyles, InputBase, Tooltip, InputBaseProps, Box, fade } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import { insertAtCursor } from "../utils/dom";

interface Props extends Omit<InputBaseProps, "onChange"> {
  value: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  onClickCopy?: boolean;
}

const useStyles = makeStyles((theme) => {
  return {
    box: {
      height: "100%",
      position: "relative",
    },
    textarea: {
      alignItems: "flex-start",
      height: "100%",
      color: `${theme.palette.text.primary} !important`,
    },
    clearButton: {
      position: "absolute",
      top: "1.8rem",
      right: "2rem",
      color: fade(theme.palette.text.primary, 0.5),
    },
  };
});

const TAB_CHAR = "  ";

const Textarea: FC<Props> = (props) => {
  const { className, value, onClear, onChange = () => {}, onClickCopy = false, ...restProps } = props;
  const styles = useStyles();
  const inputRef = useRef<HTMLTextAreaElement>();
  const [copied, setCopied] = useState(false);
  const [focused, setFocused] = useState(false);

  const focus = () => {
    inputRef.current?.focus();
    setFocused(true);
  };

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

  const handleTooltipClose = useCallback(() => {
    setTimeout(() => setCopied(false), 200);
  }, []);

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
      inputProps={{ style: { padding: "1.5rem 2rem" }, rowsMin: 10 }}
      className={clsx(styles.textarea, props.className)}
      spellCheck="false"
      onKeyDown={keyEventListener}
      onMouseUp={focus}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      multiline
      fullWidth
      {...onClickCopyProps}
      {...restProps}
    />
  );

  return (
    <Box className={styles.box}>
      {onClickCopy && value ? (
        <Tooltip
          title={copied ? "Copied!" : "Click to Copy"}
          onClose={handleTooltipClose}
          arrow
          placement="top"
        >
          {input}
        </Tooltip>
      ) : (
        input
      )}
      {focused && onClear ? (
        <Tooltip title="Clear input" enterDelay={500} arrow placement="top">
          <span className={styles.clearButton} onMouseDown={onClear}>
            <CloseIcon />
          </span>
        </Tooltip>
      ) : null}
    </Box>
  );
};

export default Textarea;
