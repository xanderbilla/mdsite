import React, { useState } from "react";

type Props = {
  onTextChange: (text: string) => void;
};

export default function TxtArea({ onTextChange }: Props) {
  const [text, setText] = useState("");
  const maxCharacters = 250;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
    onTextChange(newText);
  };

  return (
    <div className="w-full">
      <textarea
        placeholder="Type your message here"
        value={text}
        onChange={handleChange}
        maxLength={maxCharacters}
        className="w-full h-36 p-2 border border-slate-400 rounded-md outline-slate-600/50"
      />
      <div className="text-right text-gray-500/60">
        {maxCharacters - text.length}/{maxCharacters}
      </div>
    </div>
  );
}
