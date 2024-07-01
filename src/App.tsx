import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchResults from './components/SearchResults';
import ApplicationDetails from './components/ApplicationDetails';
import EditForm from './components/EditForm';
import NotFound from './components/NotFound';
import {mockData} from '../src/mockData/mockUiData'
import { Application } from './mockData/applicationModel'

const App = () => {
  const [searchResults, setSearchResults] = useState<Application[]>([]);
  const history = useHistory();

  const handleSearch = (applicationId: string) => {
    const results = mockData.filter(app => app.applicationId === applicationId);
    setSearchResults(results);
  };

  const handleViewDetails = (id: string) => {
    history.push(`/casefile/${id}`);
  };

  const handleEditDetails = (id: string) => {
    history.push(`/edit/${id}`);  
  };

  return (
    <Router>
      <div>
        <Navbar onSearch={handleSearch} />
        <Switch>
          <Route exact path="/">
            <SearchResults 
              results={searchResults} 
              onViewDetails={handleViewDetails} 
              onEditDetails={handleEditDetails} 
            />
          </Route>
          <Route path="/application/:id" component={ApplicationDetails} />
          <Route path="/edit/:id" component={EditForm} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
