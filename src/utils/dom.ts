export const insertAtCursor = (str: string, textarea: HTMLTextAreaElement | undefined) => {
  if (!textarea) {
    return [0, 0];
  }
  // get current text of the textarea
  const value = textarea.value;

  // save selection start and end position
  const start = textarea.selectionStart || 0;
  const end = textarea.selectionEnd || 0;

  // update the value with our text inserted
  textarea.value = value.slice(0, start) + str + value.slice(end);
  // update cursor to be at the end of insertion
  textarea.selectionStart = textarea.selectionEnd = start + str.length;
};
