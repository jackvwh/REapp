import React from "react";


function AdminPage() {
    return (
        <>
        <main>
            <div className="admin-page-container">
            <div className="admin-page-header">
                <h1>Admin side</h1>
            </div>
            <div className="admin-page-body">
                <div className="admin-page-body-left">
                <h2>Brugere</h2>
                <p>Her kan du se alle brugere</p>
                <button className="button-30">Se brugere</button>
                </div>
                <div className="admin-page-body-right">
                <h2>Grupper</h2>
                <p>Her kan du se alle grupper</p>
                <button className="button-30">Se grupper</button>
                </div>
            </div>
            </div>
        </main>
        </>
    );
    }

export default AdminPage;