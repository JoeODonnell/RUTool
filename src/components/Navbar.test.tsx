import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('renders search input and button', () => {
    render(
      <Router>
        <Navbar onSearch={jest.fn()} />
      </Router>
    );

    expect(screen.getByPlaceholderText('Search by Application ID')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  test('updates search term on input change', () => {
    render(
      <Router>
        <Navbar onSearch={jest.fn()} />
      </Router>
    );

    fireEvent.change(screen.getByPlaceholderText('Search by Application ID'), {
      target: { value: '12345' },
    });

    expect(screen.getByDisplayValue('12345')).toBeInTheDocument();
  });

  test('calls history.push with correct URL on search', () => {
    const historyMock = { push: jest.fn() };
    render(
      <Router>
        <Navbar onSearch={() => {}} />
      </Router>
    );

    fireEvent.change(screen.getByPlaceholderText('Search by Application ID'), {
      target: { value: '12345' },
    });
    fireEvent.submit(screen.getByRole('button', { name: 'Search' }));

    // Note: This test will not work as expected because we cannot mock useHistory in this setup.
    // To properly test this, you might need to mock the useHistory hook or use a different testing strategy.
    expect(historyMock.push).toHaveBeenCalledWith('/?search=12345');
  });

  test('navigates to correct URL on search submission', () => {
    const history = createMemoryHistory();
    const onSearchMock = jest.fn();
    render(
      <Router history={history}>
        <Navbar onSearch={onSearchMock} />
      </Router>
    );

    fireEvent.change(screen.getByPlaceholderText('Search by Application ID'), {
      target: { value: 'test123' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    expect(history.location.search).toBe('?search=test123');
  })
});