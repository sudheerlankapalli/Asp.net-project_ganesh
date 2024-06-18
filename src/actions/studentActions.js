import axios from 'axios';

const apiUrl = 'https://localhost:5001/api/students'; // Replace with your API URL

export const fetchStudents = () => async (dispatch) => {
    const response = await axios.get(apiUrl);
    dispatch({
        type: 'FETCH_STUDENTS',
        payload: response.data
    });
};

export const addStudent = (student) => async (dispatch) => {
    const response = await axios.post(apiUrl, student);
    dispatch({
        type: 'ADD_STUDENT',
        payload: response.data
    });
};

// Other actions for updating and deleting students, managing family members, etc.
