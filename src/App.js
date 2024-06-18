import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentDetails from './components/StudentDetails';
import StudentForm from './components/StudentForm';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/students">Students</Link>
                        </li>
                        {/* Add more links as needed */}
                    </ul>
                </nav>

                <Switch>
                    <Route path="/students">
                        <StudentList />
                    </Route>
                    <Route path="/student/:id" render={({ match }) => <StudentDetails studentId={match.params.id} />} />
                    <Route path="/add-student">
                        <StudentForm onSubmit={(newStudent) => console.log('New student added:', newStudent)} />
                    </Route>
                    {/* Add more routes as needed */}
                    <Route path="/">
                        <h1>Welcome to Student Registration System</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
