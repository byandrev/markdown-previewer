import { useRef, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleTab from "./TitleTab";
import Form from "react-bootstrap/Form";
import useEditor from "../hooks/useEditor";

function Wrapper() {
  const { input, output, updateInput } = useEditor();
  const refOutput = useRef(null);

  const handleOnChange = (event) => {
    updateInput(event.target.value);
  };

  useEffect(() => {
    refOutput.current.innerHTML = output;
  }, [output]);

  return (
    <Row>
      <Col xs={12} md={5} className="border-end max-h-full">
        <TitleTab title="Editor" />
        <Form>
          <Form.Group>
            <Form.Control
              value={input}
              onChange={handleOnChange}
              as="textarea"
              id="editor"
              className="px-4 py-2"
            />
          </Form.Group>
        </Form>
      </Col>
      <Col xs={12} md={7} className="max-h-full overflow-y-scroll">
        <TitleTab title="Preview" />
        <div ref={refOutput} className="px-4 py-2"></div>
      </Col>
    </Row>
  );
}

export default Wrapper;
