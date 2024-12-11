import React from 'react';

const IncidentList = () => {
    // Replace this with your API data fetching logic
    const incidents = [
        { id: 1, description: 'Unauthorized access detected', status: 'Resolved' },
        { id: 2, description: 'Suspicious login attempt', status: 'Unresolved' },
    ];

    return (
        <div>
            <h2>Incident List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {incidents.map((incident) => (
                        <tr key={incident.id}>
                            <td>{incident.id}</td>
                            <td>{incident.description}</td>
                            <td>{incident.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default IncidentList;
