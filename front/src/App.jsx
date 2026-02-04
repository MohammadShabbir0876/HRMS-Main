import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import AddEmployeeForm from './components/AddEmployeeForm';
import EmployeeList from './components/EmployeeList';
import AttendanceForm from './components/AttendanceForm';
import AttendanceList from './components/AttendanceList';
import { getEmployees, addEmployee, deleteEmployee, markAttendance, getAttendance } from './services/api';

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [activePage, setActivePage] = useState('add'); // default page

  const fetchEmployees = () => {
    getEmployees().then(res => setEmployees(res.data)).catch(err => console.error(err));
  }

  useEffect(() => { fetchEmployees(); }, []);

  const handleAddEmployee = (emp) => {
    addEmployee(emp).then(() => fetchEmployees()).catch(err => alert(err.response?.data?.detail || "Error adding employee"));
  }

  const handleDeleteEmployee = (id) => {
    deleteEmployee(id).then(() => fetchEmployees()).catch(err => alert("Error deleting employee"));
  }

  const handleMarkAttendance = (data) => {
    markAttendance(data)
      .then(() => fetchEmployeeAttendance(data.employee_id))
      .catch(err => alert("Error marking attendance"));
  }

  const fetchEmployeeAttendance = (employeeId) => {
    setSelectedEmployee(employeeId);
    getAttendance(employeeId)
      .then(res => setAttendance(res.data))
      .catch(err => setAttendance([]));
  }

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      {/* <h1 style={{ textAlign: 'center' }}>HRMS Lite</h1> */}

      {/* Navbar */}
      <Navbar active={activePage} onChange={setActivePage} />

      {/* Page Views */}
      {activePage === 'add' && <AddEmployeeForm onAdd={handleAddEmployee} />}
      {activePage === 'list' && <EmployeeList employees={employees} onDelete={handleDeleteEmployee} />}
      {activePage === 'attendanceForm' && <AttendanceForm employees={employees} onMark={handleMarkAttendance} />}
      {/* {activePage === 'attendanceList' && selectedEmployee && <AttendanceList attendance={attendance} />} */}
      {activePage === 'attendanceList' && (
  <AttendanceList attendance={attendance} employees={employees} />
)}
    </div>
  );
}
