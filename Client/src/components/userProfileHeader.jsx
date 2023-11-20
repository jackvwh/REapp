import React from 'react';

const headerStyle = {
  backgroundColor: '#3498db', 
  color: '#fff', 
  padding: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const h1Style = {
  margin: '0', 
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const buttonStyle = {
  margin: '0 10px', 
  padding: '10px',
  backgroundColor: '#fff',
  color: '#3498db', 
  border: 'none',
  cursor: 'pointer',
};

function UserProfileHeader() {
  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>REapp</h1>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle}>Ressoucer</button>
        <button style={buttonStyle}>Forside</button>
        <button style={buttonStyle}>Fællesskab</button>
      </div>
    </header>
  );
}

export default UserProfileHeader;
