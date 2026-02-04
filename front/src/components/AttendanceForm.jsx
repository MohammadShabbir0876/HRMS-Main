import React, { useState } from 'react';

export default function AttendanceForm({ employees, onMark }) {
  const [employeeId, setEmployeeId] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('Present');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employeeId || !date) {
      alert('Please select employee and date');
      return;
    }

    // ✅ SEND DATA EXACTLY AS BACKEND EXPECTS
    onMark({
      employee_id: Number(employeeId), // ⭐ VERY IMPORTANT (int)
      date: date,                      // YYYY-MM-DD
      status: status
    });

    setEmployeeId('');
    setDate('');
    setStatus('Present');
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
  };

  const inputStyle = {
    padding: '10px 12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    padding: '10px 15px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    fontWeight: '600',
    cursor: 'pointer',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={{ textAlign: 'center' }}>Mark Attendance</h2>

      {/* ✅ EMPLOYEE DROPDOWN */}
      <select
        style={inputStyle}
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        required
      >
        <option value="">Select Employee</option>
        {employees.map(emp => (
          <option key={emp.id} value={emp.id}>
            {emp.full_name} (ID: {emp.id})
          </option>
        ))}
      </select>

      {/* ✅ DATE */}
      <input
        type="date"
        style={inputStyle}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      {/* ✅ STATUS */}
      <select
        style={inputStyle}
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>

      <button type="submit" style={buttonStyle}>
        Mark Attendance
      </button>
    </form>
  );
}
