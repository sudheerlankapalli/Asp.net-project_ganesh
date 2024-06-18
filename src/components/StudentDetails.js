// src/components/StudentDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentDetails = ({ studentId }) => {
    const [student, setStudent] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/Students/${studentId}`) // Adjust URL as per your ASP.NET Core API URL
            .then(response => {
                setStudent(response.data);
            })
            .catch(error => {
                console.error('Error fetching student details:', error);
            });
    }, [studentId]);

    if (!student) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Student Details</h2>
            <p>Name: {student.firstName} {student.lastName}</p>
            <p>Date of Birth: {new Date(student.dateOfBirth).toLocaleDateString()}</p>
            <p>Nationality: {student.nationality}</p>
            {/* Add family members display here if needed */}
        </div>
    );
};

export default StudentDetails;
