import axios from 'axios';

const API = "https://hrms-assignment-a353.onrender.com";

export const getEmployees = () => axios.get(`${API}/employees`);
export const addEmployee = (data) => axios.post(`${API}/employees`, data);
export const deleteEmployee = (id) => axios.delete(`${API}/employees/${id}`);
export const getAttendance = (employeeId) => axios.get(`${API}/attendance/${employeeId}`);
export const markAttendance = (data) => axios.post(`${API}/attendance`, data);
