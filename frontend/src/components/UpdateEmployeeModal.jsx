import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../App.css";
import { Row, Col } from "react-bootstrap";
import { updateEmployee } from "../service/EmployeeService";

const UpdateEmployeeModal = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(props.employee.empId , e.target).then(
      (result) => {
        alert(result);
        props.setUpdated(true);
      },
      (error) => {
        alert("Failed to update Employee");
      }
    );
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-model-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-model-title-vcenter">
          Update Employee Information
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row>
          <Col sm={12}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="first_name">
                <Form.Label>
                  First Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="first_name"
                  defaultValue={props.employee.first_name}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="last_name">
                <Form.Label>
                  Last Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="last_name"
                  defaultValue={props.employee.last_name}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="gender">
                <Form.Label>
                  Gender <span className="text-danger">*</span>
                </Form.Label>
                <Form.Select aria-label="Select gender" name="gender" defaultValue={props.employee.gender} required>
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="contact_no">
                <Form.Label>
                  Contact No <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter contact number"
                  name="contact_no"
                  defaultValue={props.employee.contact_no}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>
                  Email <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  defaultValue={props.employee.email}
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="address">
                <Form.Label>
                  Address <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter address"
                  name="address"
                  defaultValue={props.employee.address}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="position">
                <Form.Label>
                  Position <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter position"
                  name="position"
                  defaultValue={props.employee.position}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="salary">
                <Form.Label>
                  Salary <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter salary"
                  name="salary"
                  defaultValue={props.employee.salary}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="department">
                <Form.Label>
                  Department <span className="text-danger">*</span>
                </Form.Label>
                <Form.Select
                  aria-label="Select department"
                  name="department"
                  defaultValue={props.employee.department}
                  required
                >
                  <option value="">Select department</option>
                  <option value="HR">HR</option>
                  <option value="Finance">Finance</option>
                  <option value="IT">IT</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Operations">Operations</option>
                  <option value="Sales">Sales</option>
                  <option value="Engineering">Engineering</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" type="submit" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateEmployeeModal;
