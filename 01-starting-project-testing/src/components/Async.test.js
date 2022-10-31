import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  // Arrange
  test('renders posts if request succeeds', async () => {
    // creates a mock function so there is no interaction with a server
    // overwrites the fetch functionn with a built-in function
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }]
    });
    render(<Async />)

    // Act...

    // Assert
    const listItemElements = await screen.findAllByRole('listitem', {}, {});
    expect(listItemElements).not.toHaveLength(0);
  });
});