import React, { useEffect, useState } from 'react';
import { createSensor, updateSensor, getSensor } from '../services/sensors';
import { useParams } from 'react-router-dom';

const SensorForm = ({isEditMode}) => {
    const { id } = useParams()

    const [sensorName, setSensorName] = useState('');
    const [sensorStatus, setSensorStatus] = useState('Active');


    useEffect(() => {
        const readSensor = async () => {
            const sensor = await getSensor(id)

            setSensorName(sensor.data.name)
            setSensorStatus(sensor.data.status)
        }

        if (isEditMode) {
            readSensor()

            return
        }

        setSensorName('')
        setSensorStatus('Active')
    }, [isEditMode, id])

    
    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        const sensor = { name: sensorName, status: sensorStatus };

        const rSensor = await updateSensor(id, sensor)

        // Replace this with your API call to save the sensor
        console.log('Sensor data:', rSensor);
        alert('Sensor updated successfully!');
    };

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        const newSensor = { name: sensorName, status: sensorStatus };

        const rSensor = await createSensor(newSensor)

        // Replace this with your API call to save the sensor
        console.log('New sensor data:', rSensor);
        alert('Sensor added successfully!');
    };

    return (
        <div>
            <h2>{isEditMode ? 'Update Sensor' : 'Add a New Sensor'}</h2>
            <form onSubmit={isEditMode ? handleUpdateSubmit : handleAddSubmit}>
                <div>
                    <label>Sensor Name:</label>
                    <input
                        type="text"
                        value={sensorName}
                        onChange={(e) => setSensorName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <select
                        value={sensorStatus}
                        onChange={(e) => setSensorStatus(e.target.value)}
                    >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <button type="submit">{isEditMode ? 'Update' : 'Add'} Sensor</button>
            </form>
        </div>
    );
};

export default SensorForm;
