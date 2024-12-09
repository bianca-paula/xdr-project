package com.example.xdr.controller;

import com.example.xdr.entity.Sensor;
import com.example.xdr.service.SensorService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SensorController {
    private final SensorService sensorService;

    public SensorController(SensorService sensorService) {
        this.sensorService = sensorService;
    }

    @GetMapping("/api/sensors")
    public List<Sensor> getAllSensors() {
        return sensorService.getAllSensors();
    }
}

