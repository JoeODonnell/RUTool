import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mockData } from '../mockData/mockUiData'
import { Application } from '../mockData/applicationModel'

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};



type SearchResultsProps = {
    results: Application[];
    onViewDetails: (id: string) => void;
    onEditDetails: (id: string) => void;
  };

const SearchResults: React.FC<SearchResultsProps> = ({ results, onViewDetails, onEditDetails }) => {
  const query = useQuery();
  const searchTerm = query.get('')

  const filteredData = mockData.filter(
    (app) => app.applicationId === searchTerm
  );

  return (
  <div className='search-results'>
    {filteredData.length > 0 ? (
      <table className='styled-table'>
        <thead>
          <tr className='active-row'>
            <th>Application ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((app) => (
            <tr className='active-row' key={app.applicationId}>
              <td>{app.applicationId}</td>
              <td>
                <Link className='' to={`/application/${app.applicationId}`}>View</Link>
                {/* Uncomment the next line if you want to add an Edit link */}
                <Link to={`/edit/${app.applicationId}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No results found</p>
    )}
  </div>
  );
};

export default SearchResults;
