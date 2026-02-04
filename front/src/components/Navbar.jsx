import React from 'react';

export default function Navbar({ active, onChange }) {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2F4F4F', // professional dark gray
    padding: '10px 30px',
    color: 'white',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
    borderRadius: '0 0 8px 8px',
    fontFamily: 'Arial, sans-serif',
  };

  const menuContainer = {
    display: 'flex',
    gap: '20px',
  };

  const menuItemStyle = (isActive) => ({
    cursor: 'pointer',
    padding: '8px 16px',
    borderRadius: '6px',
    backgroundColor: isActive ? '#556B2F' : 'transparent', // dark olive green highlight
    fontWeight: isActive ? '600' : '400',
    transition: 'all 0.3s ease',
  });

  const logoStyle = {
    fontWeight: '700',
    fontSize: '20px',
    letterSpacing: '1px',
    color: '#FFD700', // golden color
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>HRMS Lite</div>
      <div style={menuContainer}>
        <div style={menuItemStyle(active === 'add')} onClick={() => onChange('add')}>Add Employee</div>
        <div style={menuItemStyle(active === 'list')} onClick={() => onChange('list')}>Employee List</div>
        <div style={menuItemStyle(active === 'attendanceForm')} onClick={() => onChange('attendanceForm')}>Attendance Form</div>
        <div style={menuItemStyle(active === 'attendanceList')} onClick={() => onChange('attendanceList')}>Attendance Records</div>
      </div>
    </nav>
  );
}
