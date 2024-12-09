import React, { useState, useEffect } from 'react';

const SensorsList = () => {
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

    if (loading) return <div>Loading sensors...</div>;  // Display loading message
    if (error) return <div>{error}</div>;  // Display error message

    return (
        <div>
            <h2>Sensor List</h2>
            <ul>
                {sensors.map((sensor) => (
                    <li key={sensor.id}>
                        <strong>{sensor.name}</strong>: {sensor.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SensorsList;
