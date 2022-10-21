import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders Hello World as a text', () => {
  //  Arrange
  render(<Greeting />);

  // Act
  // ... nothing

  // Assert
  const helloWorldElement = screen.getByText('Hello World');
  expect(helloWorldElement).toBeInTheDocument();

});

// Arrange - set up the test data, test conditions, and test environment
// Act - run logic that should be tested (e.g. execute function)
// Assert - Compare execution results with expected results
