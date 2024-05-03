// import axios from 'axios';

// export function getEmployees() {
//     return axios.get('http://127.0.0.1:8000/Employee')
//         .then(response => response.data)
// }



import axios from 'axios';

export function getEmployees() {
    return axios.get('http://127.0.0.1:8000/Employee')
        .then(response => {
            console.log(response.data); // Print the data received from the server
            return response.data; // Return the data as usual
        })
        .catch(error => {
            console.error('Error fetching data:', error); // Print any errors that occur during the request
            throw error; // Rethrow the error to propagate it to the caller
        });
}


export function addEmployee(employee) {
    return axios.post('http://127.0.0.1:8000/Employee/', {
        empId:null,
        first_name:employee.first_name.value,
        last_name:employee.last_name.value,
        gender:employee.gender.value,
        contact_no:employee.contact_no.value,
        email:employee.email.value,
        address:employee.address.value,
        position:employee.position.value,
        salary:employee.salary.value,
        department:employee.department.value
    })
    .then(response => {
        console.log(response.data); // Print the data received from the server
        return response.data; // Return the data as usual
    })
    .catch(error => {
        console.error('Error adding employee:', error); // Print any errors that occur during the request
        throw error; // Rethrow the error to propagate it to the caller
    });
}


export function updateEmployee(empId , employee) {
    return axios.put('http://127.0.0.1:8000/Employee/' + empId + '/', {
        first_name:employee.first_name.value,
        last_name:employee.last_name.value,
        gender:employee.gender.value,
        contact_no:employee.contact_no.value,
        email:employee.email.value,
        address:employee.address.value,
        position:employee.position.value,
        salary:employee.salary.value,
        department:employee.department.value
    })
    .then(response => {
        console.log(response.data); // Print the data received from the server
        return response.data; // Return the data as usual
    })
    .catch(error => {
        console.error('Error adding employee:', error); // Print any errors that occur during the request
        throw error; // Rethrow the error to propagate it to the caller
    });
}

export function deleteEmployee(empId) {
    return axios.delete('http://127.0.0.1:8000/Employee/'+empId+'/',
    {
        method:'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }

    })
        .then(response => response.data)
}