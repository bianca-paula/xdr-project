import React, { useState, useEffect } from 'react';
import { deleteSensor } from '../services/sensors';
import { useNavigate } from 'react-router-dom';

const SensorsList = () => {
    const navigate = useNavigate()

    const [sensors, setSensors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from the backend API
    useEffect(() => {
        fetch('http://localhost:8080/api/sensors') // URL to your Spring Boot API
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setSensors(data);  // Set the fetched sensor data
                setLoading(false);  // Set loading to false
            })
            .catch((err) => {
                setError('Error fetching data');
                setLoading(false);  // Set loading to false
            });
    }, []);  // Empty dependency array ensures this runs only once

    const handleOnDelete = async (e, sensorId) => {
        e.preventDefault();

        await deleteSensor(sensorId)

        setSensors(prevSensors => prevSensors.filter(s => s.id !== sensorId))
    } 

    if (loading) return <div>Loading sensors...</div>;  // Display loading message
    if (error) return <div>{error}</div>;  // Display error message

    return (
        <div>
            <h2>Sensor List</h2>
            <ul>
                {sensors.map((sensor) => (
                    <li key={sensor.id}>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <div> <strong>{sensor.name}</strong>: {sensor.status}</div>
                            <button onClick={() => navigate(`/update-sensor/${sensor.id}`)}>Edit</button>
                            <button onClick={(e) => handleOnDelete(e, sensor.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SensorsList;
