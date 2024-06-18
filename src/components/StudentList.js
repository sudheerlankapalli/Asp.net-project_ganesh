import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStudents } from '../actions/studentActions';

const StudentList = () => {
    const dispatch = useDispatch();
    const students = useSelector(state => state.students);

    useEffect(() => {
        dispatch(fetchStudents());
    }, [dispatch]);

    return (
        <div>
            <h2>Students</h2>
            <ul>
                {students.map(student => (
                    <li key={student.ID}>{student.firstName} {student.lastName}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
