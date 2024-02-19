import { useState } from "react";

const StringArea = ({ text }) => {
  const [expand, setExpand] = useState(false);

  let shortText = text;

  //  bu alan kapaliysa ve yazi 300 harften uzunda yaziyi kes ve sonuna .. more yaz

  if (!expand && text.length > 300) {
    shortText = text.slice(0, 300) + "..." + " " + "More";
  }

  return (
    <div className="cursor-pointer" onClick={() => setExpand(!expand)}>
      {shortText.split("\n").map((line, index) => (
        <span key={index}>
          {line} <br />
        </span>
      ))}
    </div>
  );
};

export default StringArea;
