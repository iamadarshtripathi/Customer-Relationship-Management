import React, { useEffect, useState } from "react";
import { getEmployees } from "../service/EmployeeService";
import "../App.css";
import Table from "react-bootstrap/Table";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    let mounted = true;
    getEmployees().then((data) => {
      if (mounted) {
        setEmployees(data);
      }
    });
    return () => (mounted = false);
  }, []);

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
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Employees;
