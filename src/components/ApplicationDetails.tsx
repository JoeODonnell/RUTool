// Adjustments to ApplicationDetails.tsx to include a table layout similar to SearchResults.tsx

import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { mockData } from '../mockData/mockUiData';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ApplicationDetails = () => {
  const { id } = useParams<{ id: string }>();
  const query = useQuery();
  const searchTerm = query.get('search');
  const application = mockData.find((app) => app.applicationId === id);

  return (
    <div className='application-details'>
      {application ? (
        <div>
          <Link to={`/?search=${searchTerm}`}>Back</Link>
          <h2>Application Details for ID: {id}</h2>
          <table className='styled-table'>
            <tbody>
              <tr>
                <th>Agent</th>
                <td>{application.agentDetails.agentName}</td>
              </tr>
              {application.clients.map((client, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <th>Name</th>
                    <td>{client.firstName} {client.lastName}</td>
                  </tr>
                  <tr>
                    <th>Date of Birth</th>
                    <td>{client.dateOfBirth}</td>
                  </tr>
                  <tr>
                    <th>Sex</th>
                    <td>{client.sex}</td>
                  </tr>
                  <tr>
                    <th>Smoker Status</th>
                    <td>{client.smokerStatus}</td>
                  </tr>
                  {/* Add more client-specific fields here */}
                </React.Fragment>
              ))}
              {/* Add more application-specific fields here */}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Application not found</p>
      )}
    </div>
  );
};

export default ApplicationDetails; 