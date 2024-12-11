package com.example.xdr.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.example.xdr.entity.Sensor;
import com.example.xdr.repository.SensorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SensorService {
    private final SensorRepository sensorRepository;
    private static final Logger logger = LoggerFactory.getLogger(SensorService.class);

    public SensorService(SensorRepository sensorRepository) {
        this.sensorRepository = sensorRepository;
    }

    // Fetch sensor
    public Sensor getSensor(Long id) {
        Optional<Sensor> sensor = sensorRepository.findById(id);

        return sensor.get();
    }
    
    // Fetch all sensors
    public List<Sensor> getAllSensors() {
        List<Sensor> sensors = sensorRepository.findAll();
        logger.info("Fetched sensors: {}", sensors);
        return sensors;
    }

    // Add a new sensor
    public Sensor saveSensor(Sensor sensor) {
        logger.info("Saving sensor: {}", sensor);
        return sensorRepository.save(sensor);
    }

    // Update sensor
    public Sensor updatSensor(Long id, Sensor sensor) {
        Sensor sensorToFind = sensorRepository.findById(id).get();

        sensorToFind.setName(sensor.getName());
        sensorToFind.setStatus(sensor.getStatus());

        return sensorRepository.save(sensorToFind);
    }

    // Delete a sensor by ID
    public void deleteSensor(Long id) {
        if (sensorRepository.existsById(id)) {
            logger.info("Deleting sensor with ID: {}", id);
            sensorRepository.deleteById(id);
        } else {
            logger.warn("Sensor with ID {} does not exist.", id);
        }
    }

    // Optional: Fetch sensor by ID
    public Optional<Sensor> getSensorById(Long id) {
        logger.info("Fetching sensor with ID: {}", id);
        return sensorRepository.findById(id);
    }
}
