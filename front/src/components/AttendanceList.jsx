import React, { useState } from 'react';

export default function AttendanceList({ attendance, employees }) {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  // ✅ Find selected employee (id is INT)
  const selectedEmployee = employees.find(
    emp => emp.id === selectedEmployeeId
  );

  // ✅ Filter attendance for selected employee
  const attendanceForSelected = selectedEmployee
    ? attendance.filter(a => a.employee_id === selectedEmployeeId)
    : [];

  const tableStyle = {
    width: '100%',
    maxWidth: '800px',
    margin: '20px auto',
    borderCollapse: 'collapse',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const thStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '12px 15px',
    textAlign: 'left',
  };

  const tdStyle = {
    padding: '12px 15px',
    borderBottom: '1px solid #e0e0e0',
  };

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Employee Attendance Records
      </h2>

      {/* ✅ Employee Dropdown */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <select
          value={selectedEmployeeId ?? ''}
          onChange={e =>
            setSelectedEmployeeId(
              e.target.value ? Number(e.target.value) : null
            )
          }
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            minWidth: '250px'
          }}
        >
          <option value="">Select Employee</option>
          {employees.map(emp => (
            <option key={emp.id} value={emp.id}>
              {emp.full_name} (ID: {emp.id})
            </option>
          ))}
        </select>
      </div>

      {/* ✅ Attendance Table */}
      {selectedEmployee ? (
        attendanceForSelected.length > 0 ? (
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceForSelected.map((a, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{a.date}</td>
                  <td style={tdStyle}>{a.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ textAlign: 'center', color: '#555' }}>
            No attendance records found for {selectedEmployee.full_name}.
          </p>
        )
      ) : (
        <p style={{ textAlign: 'center', color: '#555' }}>
          Please select an employee to view attendance.
        </p>
      )}
    </div>
  );
}
