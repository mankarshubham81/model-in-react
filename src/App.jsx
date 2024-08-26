import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import './App.css';


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='box'>
      <Button className='btn' variant="primary" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          {/* Large amount of text here */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis nisl nec arcu egestas,
            et pretium arcu dictum. Nulla facilisi. Proin nec vestibulum nisi. Nam vehicula consequat 
            bibendum. Mauris vestibulum, urna id feugiat fringilla, dolor ex volutpat eros, ut malesuada
            sem est ut enim. Suspendisse potenti. Sed ac erat sit amet erat feugiat vehicula. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam vel
            purus eu dolor accumsan efficitur. Curabitur non tortor eu arcu finibus facilisis at ut lacus.
            Quisque sagittis purus quis felis condimentum, ac bibendum eros consectetur. Duis volutpat
            nisi metus, id ultrices mi dignissim et. Nam auctor tortor vel nulla consequat, non aliquet
            tortor sodales. Cras scelerisque lacinia odio, ac venenatis nunc.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis nisl nec arcu egestas,
            et pretium arcu dictum. Nulla facilisi. Proin nec vestibulum nisi. Nam vehicula consequat 
            bibendum. Mauris vestibulum, urna id feugiat fringilla, dolor ex volutpat eros, ut malesuada
            sem est ut enim. Suspendisse potenti. Sed ac erat sit amet erat feugiat vehicula. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam vel
            purus eu dolor accumsan efficitur. Curabitur non tortor eu arcu finibus facilisis at ut lacus.
            Quisque sagittis purus quis felis condimentum, ac bibendum eros consectetur. Duis volutpat
            nisi metus, id ultrices mi dignissim et. Nam auctor tortor vel nulla consequat, non aliquet
            tortor sodales. Cras scelerisque lacinia odio, ac venenatis nunc.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;

// Scrollable Modal Body: The Modal.Body has been given a maxHeight of calc(100vh - 210px) and overflowY: auto.
//  This ensures that if the content inside the modal body exceeds this height, it will become scrollable instead of overflowing.