import React, { useState } from 'react';

export default function AddEmployeeForm({ onAdd }) {
  const [full_name, setFullName] = useState('');
  const [employee_id, setEmployeeId] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ employee_id, full_name, email, department });
    setFullName('');
    setEmployeeId('');
    setEmail('');
    setDepartment('');
  }

  const containerStyle = {
    maxWidth: '500px',
    margin: '20px auto',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  };

  const rowStyle = {
    marginBottom: '15px', // space between rows
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: '500',
  };

  const inputStyle = {
    width: '96%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  return (
    <form onSubmit={handleSubmit} style={containerStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add New Employee</h2>

      <div style={rowStyle}>
        <label style={labelStyle}>Employee ID</label>
        <input
          style={inputStyle}
          required
          placeholder="E.g., EMP001"
          value={employee_id}
          onChange={e => setEmployeeId(e.target.value)}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Full Name</label>
        <input
          style={inputStyle}
          required
          placeholder="E.g., John Doe"
          value={full_name}
          onChange={e => setFullName(e.target.value)}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Email</label>
        <input
          style={inputStyle}
          type="email"
          required
          placeholder="E.g., john@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Department</label>
        <input
          style={inputStyle}
          required
          placeholder="E.g., HR, IT, Sales"
          value={department}
          onChange={e => setDepartment(e.target.value)}
        />
      </div>

      <button
        type="submit"
        style={buttonStyle}
        onMouseOver={e => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={e => e.target.style.backgroundColor = '#007BFF'}
      >
        Add Employee
      </button>
    </form>
  );
}
