package com.example.xdr.controller;

import com.example.xdr.entity.Sensor;
import com.example.xdr.service.SensorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sensors")
public class SensorController {
    private final SensorService sensorService;

    public SensorController(SensorService sensorService) {
        this.sensorService = sensorService;
    }

    // Existing GET endpoint
    @GetMapping("/{id}")
    public Sensor getSensor(@PathVariable Long id) {
        return sensorService.getSensor(id);
    }

    @GetMapping
    public List<Sensor> getAllSensors() {
        return sensorService.getAllSensors();
    }

    // New POST endpoint to create a sensor
    @PostMapping
    public Sensor createSensor(@RequestBody Sensor sensor) {
        return sensorService.saveSensor(sensor); // Assumes a saveSensor method in SensorService
    }

    // New DELETE endpoint to delete a sensor by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSensor(@PathVariable Long id) {
        sensorService.deleteSensor(id); // Assumes a deleteSensor method in SensorService
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public Sensor updateSensor(@PathVariable Long id, @RequestBody Sensor sensor) {
        return sensorService.updatSensor(id, sensor);
    }
 
}
