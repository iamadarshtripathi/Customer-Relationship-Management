// import axios from 'axios';

// export function getEmployees() {
//     return axios.get('http://127.0.0.1:8000/Employee')
//         .then(response => response.data)
// }



import axios from 'axios';

export function getEmployees() {
    return axios.get('http://127.0.0.1:8000/Employee')
        .then(response => {
            console.log('data maam'); // Print the data received from the server
            console.log(response.data); // Print the data received from the server
            return response.data; // Return the data as usual
        })
        .catch(error => {
            console.error('Error fetching data:', error); // Print any errors that occur during the request
            throw error; // Rethrow the error to propagate it to the caller
        });
}

