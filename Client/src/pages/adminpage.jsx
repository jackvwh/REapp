import React from 'react';
import '../styles/index.css';

function AdminPage() {
  return (
    <main>
      <h1 className="">Admin Page</h1>
      <p>Her kan admin se alle brugere og slette dem</p>

      <button className="btn btn-secondary">Slet bruger</button>
    </main>
  );
}

export default AdminPage;
