import './Editor.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Editor() {
  return (
    <Card>
      <Card.Header>Editor Area</Card.Header>
      <Card.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={10} />
            </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Editor;