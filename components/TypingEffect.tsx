import { useState, useEffect } from "react";

type Props = {
  text: string;
};

function TypingEffect({ text }: Props) {
  const [displayText, setDisplayText] = useState("");
  let index = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [text]);

  return <div className="pt-1 text-sm">{displayText}</div>;
}

export default TypingEffect;
