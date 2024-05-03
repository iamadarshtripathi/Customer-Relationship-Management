import React, { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../service/EmployeeService";
import { Button, ButtonToolbar } from "react-bootstrap";
import "../App.css";
import Table from "react-bootstrap/Table";
import AddEmployeeModal from "./AddEmployeeModal";
import UpdateEmployeeModal from "./UpdateEmployeeModal";

const Manage = () => {
  const [employees, setEmployees] = useState([]);
  const [addModelShow, setAddModelShow] = useState(false);
  const [editModelShow, setEditModelShow] = useState(false);
  const [editEmployee, setEditEmployee] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (employees.length && !isUpdated) {
      return;
    }
    getEmployees().then((data) => {
      if (mounted) {
        setEmployees(data);
      }
    });
    return () => {
      mounted = false;
      setIsUpdated(false);
    };
  }, [isUpdated, employees]);

  const handleAdd = (e) => {
    e.preventDefault();
    setAddModelShow(true);
  };
  const handleUpdate = (e, emp) => {
    e.preventDefault();
    setEditModelShow(true);
    setEditEmployee(emp);
  };

  const handleDelete = (e, empId) => {
    if (window.confirm("Are you sure?")) {
      e.preventDefault();
      deleteEmployee(empId).then(
        (result) => {
          alert(result);
          setIsUpdated(true);
        },
        (error) => {
          alert("Failed to Delete Employee");
        })
    }
  };

  let AddModalClose = () => setAddModelShow(false);
  let EditModalClose = () => setEditModelShow(false);

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
                <Button
                  className="mr-2"
                  variant="primary"
                  onClick={(event) => handleUpdate(event, emp)}
                >
                  Update
                </Button>{" "}
                <UpdateEmployeeModal
                  show={editModelShow}
                  onHide={EditModalClose}
                  employee={editEmployee}
                  setUpdated={setIsUpdated}
                ></UpdateEmployeeModal>
                <Button
                  className="mr-2"
                  variant="danger"
                  onClick={(event) => handleDelete(event, emp.empId)}
                >
                  Delete
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
        <AddEmployeeModal
          show={addModelShow}
          onHide={AddModalClose}
          setUpdated={setIsUpdated}
        ></AddEmployeeModal>
      </ButtonToolbar>
    </div>
  );
};

export default Manage;
