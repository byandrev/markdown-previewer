import { useContext } from "react";
import { EditorContext } from "../context/EditorContext";

function useEditor() {
  const { input, output, setInput } = useContext(EditorContext);

  const updateInput = (val) => setInput(val);

  return {
    input,
    output,
    updateInput
  };
}

export default useEditor;
