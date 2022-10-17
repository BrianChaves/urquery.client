import './Document.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Document() {
  return (
    <Card>
      <Card.Header>Document Area</Card.Header>
      <Card.Body>
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>File Upload!</Form.Label>
            <Form.Control type="file" />
        </Form.Group>
      </Card.Body>
    </Card>
  );
}

export default Document;