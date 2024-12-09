package com.example.xdr.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.example.xdr.entity.Sensor;
import com.example.xdr.repository.SensorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SensorService {
    private final SensorRepository sensorRepository;
    private static final Logger logger = LoggerFactory.getLogger(SensorService.class);

    public SensorService(SensorRepository sensorRepository) {
        this.sensorRepository = sensorRepository;
    }

    public List<Sensor> getAllSensors() {
        List<Sensor> sensors = sensorRepository.findAll();
        logger.info("Fetched sensors: {}", sensors);  // Log fetched sensors
        return sensors;
    }
}