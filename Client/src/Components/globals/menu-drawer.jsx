import React from 'react';

export default function MenuDrawer() {
  return (
    <menu>
      <div className="drawer drawer-end z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">
            Åben menu
          </label>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li>
              <button
                className="btn"
                onClick={() => document.getElementById('question-modal').showModal()}
              >
                Opret nyt spørgsmål
              </button>
            </li>
            <li>
              <button
                className="btn"
                onClick={() => document.getElementById('survey-modal').showModal()}
              >
                Opret spørgeskema
              </button>
            </li>
            <li>
              <a>Slet bruger</a>
            </li>
          </ul>
        </div>
      </div>
    </menu>
  );
}
