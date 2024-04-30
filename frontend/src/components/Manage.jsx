import React, { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../service/EmployeeService";
import { Button, ButtonToolbar } from "react-bootstrap";
import "../App.css";
import Table from "react-bootstrap/Table";
import AddEmployeeModal from './AddEmployeeModal';

const Manage = () => {
  const [employees, setEmployees] = useState([]);
  const [addModelShow, setAddModelShow] = useState(false);

  useEffect(() => {
    let mounted = true;
    getEmployees().then((data) => {
      if (mounted) {
        setEmployees(data);
      }
    });
    return () => (mounted = false);
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    setAddModelShow(true);
  }

  let AddModalClose = () => setAddModelShow(false);




  return (
    <div className="row side-row">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Contact No</th>
            <th>Email Id</th>
            <th>Address</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.empId}</td>
              <td>{emp.first_name}</td>
              <td>{emp.last_name}</td>
              <td>{emp.gender}</td>
              <td>{emp.contact_no}</td>
              <td>{emp.email}</td>
              <td>{emp.address}</td>
              <td>{emp.position}</td>
              <td>{emp.salary}</td>
              <td>{emp.department}</td>
              <td>
                <Button className="mr-2" variant="primary">
                  Update
                </Button>{" "}
                <Button className="mr-2" variant="danger">
                  Danger
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ButtonToolbar>
        <Button className="mr-2" variant="success" onClick={handleAdd}>
          Add Employee
        </Button>{" "}
        <AddEmployeeModal show={addModelShow} onHide={AddModalClose}></AddEmployeeModal>
      </ButtonToolbar>
    </div>
  );
};

export default Manage;
