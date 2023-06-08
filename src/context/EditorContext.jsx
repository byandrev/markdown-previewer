import { createContext, useEffect, useState } from "react";
import { marked } from "marked";

export const EditorContext = createContext();

export default function EditorProvider({ children }) {
  const [input, setInput] = useState("# Hello World!");
  const [output, setOutput] = useState("");

  useEffect(() => {
    setOutput(marked.parse(input));
  }, [input]);

  const value = {
    input,
    output,
    setInput,
    setOutput
  };

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
}
