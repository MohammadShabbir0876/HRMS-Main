import React from 'react';

export default function EmployeeList({ employees, onDelete }) {
  if (!employees.length) {
    return <p style={{ textAlign: 'center', marginTop: '20px', color: '#555' }}>No employees found.</p>;
  }

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

  const trHoverStyle = {
    backgroundColor: '#f1f1f1',
  };

  const deleteButtonStyle = {
    padding: '6px 12px',
    fontSize: '14px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Employee ID</th>
          <th style={thStyle}>Full Name</th>
          <th style={thStyle}>Email</th>
          <th style={thStyle}>Department</th>
          <th style={thStyle}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(emp => (
          <tr
            key={emp.id}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = trHoverStyle.backgroundColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <td style={tdStyle}>{emp.employee_id}</td>
            <td style={tdStyle}>{emp.full_name}</td>
            <td style={tdStyle}>{emp.email}</td>
            <td style={tdStyle}>{emp.department}</td>
            <td style={tdStyle}>
              <button
                style={deleteButtonStyle}
                onClick={() => onDelete(emp.id)}
                onMouseEnter={e => e.target.style.backgroundColor = '#b02a37'}
                onMouseLeave={e => e.target.style.backgroundColor = '#dc3545'}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
