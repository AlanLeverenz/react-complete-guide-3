import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  // Arrange
  test('renders posts if request succeeds', async () => {
    render(<Async />)

    // Act...

    // Assert
    const listItemElements = await screen.findAllByRole('listitem', {}, {});
    expect(listItemElements).not.toHaveLength(0);
  });
});