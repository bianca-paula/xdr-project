import { axiosAPI } from "./axios";

export const getSensor = (sensorId) => {
    return axiosAPI.get(`/sensors/${sensorId}`)
}

export const createSensor = (sensor) => {
    return axiosAPI.post('/sensors', sensor)
}

export const updateSensor = (id, sensor) => {
    return axiosAPI.put(`/sensors/${id}`, sensor)
}

export const deleteSensor = (sensorId) => {
    return axiosAPI.delete(`/sensors/${sensorId}`)
}
