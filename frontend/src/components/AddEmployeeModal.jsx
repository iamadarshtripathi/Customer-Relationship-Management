import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddEmployeeModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}
    size='lg' aria-labelledby='contained-model-title-vcenter'>
      <Modal.Header closeButton>
        <Modal.Title id='contained-model-title-vcenter'>
            Fill In Employee Information
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddEmployeeModal;
