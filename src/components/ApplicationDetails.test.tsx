// Import testing libraries
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ApplicationDetails from './ApplicationDetails';
import { BrowserRouter } from 'react-router-dom';

// Import mock data
import { mockData } from '../mockData/mockUiData';

// Mock react-router-dom hooks
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: '123456', // Example application ID from mock data
    }),
    useLocation: () => ({
        search: '?search=testSearch',
    }),
}));

describe('ApplicationDetails', () => {
    test('renders application details correctly', () => {
        render(
            <BrowserRouter>
                <ApplicationDetails />
            </BrowserRouter>
        );

        // Check for elements that should be rendered with the mock data
        expect(screen.getByText('Application Details for ID: 123456')).toBeInTheDocument();
        expect(screen.getByText('Alice')).toBeInTheDocument(); // Agent name from mock data
        // Add more assertions as needed
      describe('ApplicationDetails - Additional Tests', () => {
        test('renders client details correctly', () => {
          // Assuming mockData includes an application with ID '123456' and multiple clients
          render(
            <BrowserRouter>
              <ApplicationDetails />
            </BrowserRouter>
          );
    
          // Example assertions for the first client's details
          expect(screen.getByText('John Doe')).toBeInTheDocument();
          expect(screen.getByText('1990-01-01')).toBeInTheDocument();
          expect(screen.getByText('Male')).toBeInTheDocument();
          expect(screen.getByText('No')).toBeInTheDocument();
          // Add more assertions for other clients as needed
        });
    
        test('back link uses search query parameter correctly', () => {
          render(
            <BrowserRouter>
              <ApplicationDetails />
            </BrowserRouter>
          );
    
          expect(screen.getByText('Back').closest('a')).toHaveAttribute('href', '/?search=testSearch');
        });
    
        test('handles applications without clients gracefully', () => {
          // Modify mockData or mock useParams to return an application ID with no clients
          render(
            <BrowserRouter>
              <ApplicationDetails />
            </BrowserRouter>
          );
    
          // Example assertion - adjust based on actual implementation
          expect(screen.queryByText('Name')).not.toBeInTheDocument();
          // Or check for a specific message indicating no clients are available
        });
      });
    });

    test('displays "Application not found" for invalid ID', () => {
        // Mock useParams to return an invalid ID
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useParams: () => ({
                id: 'invalidID',
            }),
        }));

        render(
            <BrowserRouter>
                <ApplicationDetails />
            </BrowserRouter>
        );

        expect(screen.getByText('Application not found')).toBeInTheDocument();
    });
});