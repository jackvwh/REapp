import React from 'react';
import '../styles/index.css';

function UserProfileHeader() {
  return (
    <header className="bg-blue-400 text-white p-4 flex justify-between items-center">
      <h1 className="text-4xl font-bold">REapp</h1> {/* Adjusted font size */}
      <div className="flex">
        <button className="btn-blue 400 btn-primary mx-2">Ressourcer</button>
        <button className="btn-blue 400 btn-secondary mx-2">Forside</button>
        <button className="btn-blue 400 btn-accent mx-2">Fællesskab</button>
      </div>
    </header>
  );
}

export default UserProfileHeader;

