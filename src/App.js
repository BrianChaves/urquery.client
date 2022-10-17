import logo from './logo.svg';
import './App.css';
import './HeaderUrQuery/HeaderUrQuery.js';
import Table from 'react-bootstrap/Table';
import Document from './Document/Document.js';
import HeaderUrQuery from './HeaderUrQuery/HeaderUrQuery.js';
import Editor from './Editor/Editor.js';
import Response from './Response/Response.js';

function App() {
  return (

    <div className="App">
      <HeaderUrQuery></HeaderUrQuery>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>
              <Editor></Editor>
            </td>
            <td>
              <Document></Document>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <Response></Response>
            </td>
          </tr>
        </tbody>
      </Table>
      

    </div>
  );
}

export default App;
