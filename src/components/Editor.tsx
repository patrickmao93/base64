import React, { FC, ChangeEventHandler } from "react";

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const Editor: FC<IProps> = (props) => {
  const { value, onChange } = props;
  return (
    <div>
      <textarea value={value} onChange={onChange} />
    </div>
  );
};

export default Editor;
