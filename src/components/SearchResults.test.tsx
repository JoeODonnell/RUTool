import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import SearchResults from './SearchResults';
import { mockData } from '../mockData/mockUiData';

// Mocking useLocation hook to simulate query parameters
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    search: '?search=12345',
  }),
}));

describe('SearchResults Component', () => {
  test('renders search results based on query', () => {
    render(
      <MemoryRouter initialEntries={['/search?search=12345']}>
        <Route path="/search">
          <SearchResults results={mockData} onViewDetails={() => {}} onEditDetails={() => {}} />
        </Route>
      </MemoryRouter>
    );

    // Check if the component renders the correct search results
    const resultText = screen.getByText('12345');
    expect(resultText).toBeInTheDocument();

    // Optionally, check for the presence of View and Edit links
    const viewLink = screen.getByText('View');
    expect(viewLink).toBeInTheDocument();
    const editLink = screen.getByText('Edit');
    expect(editLink).toBeInTheDocument();
  });

  test('renders "No results found" when there are no matching results', () => {
    render(
      <MemoryRouter initialEntries={['/search?search=nonexistent']}>
        <Route path="/search">
          <SearchResults results={mockData} onViewDetails={() => {}} onEditDetails={() => {}} />
        </Route>
      </MemoryRouter>
    );

    // Check for "No results found" text
    const noResultsText = screen.getByText('No results found');
    expect(noResultsText).toBeInTheDocument();
  });
});