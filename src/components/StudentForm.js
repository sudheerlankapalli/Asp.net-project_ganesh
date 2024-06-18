// src/components/StudentForm.js
import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newStudent = {
            firstName,
            lastName,
            dateOfBirth
        };

        try {
            const response = await axios.post('http://localhost:5000/api/Students', newStudent); // Adjust URL as per your ASP.NET Core API URL
            onSubmit(response.data); // Pass the newly created student data back to parent component
            setFirstName('');
            setLastName('');
            setDateOfBirth('');
        } catch (error) {
            console.error('Error creating student:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Student</h2>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>
            <div>
                <label>Date of Birth:</label>
                <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default StudentForm;
