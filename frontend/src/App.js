import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SensorsList from './components/SensorsList';
import SensorForm from './components/SensorForm';
import IncidentList from './components/IncidentList';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Welcome to the XDR Platform</h1>
                {/* Navigation Menu */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Sensors List</Link>
                        </li>
                        <li>
                            <Link to="/add-sensor">Add Sensor</Link>
                        </li>
                        <li>
                            <Link to="/incidents">Incidents</Link>
                        </li>
                    </ul>
                </nav>

                {/* Define Routes */}
                <Routes>
                    <Route path="/" element={<SensorsList />} />
                    <Route path="/add-sensor" element={<SensorForm />} />
                    <Route path="/update-sensor/:id" element={<SensorForm isEditMode={true}/>} />
                    <Route path="/incidents" element={<IncidentList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
