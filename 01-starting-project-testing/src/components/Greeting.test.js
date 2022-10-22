import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

// setup test groups with describe function
describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    //  Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World', { exact: false });
    expect(helloWorldElement).toBeInTheDocument();

  });
});



// Arrange - set up the test data, test conditions, and test environment
// Act - run logic that should be tested (e.g. execute function)
// Assert - Compare execution results with expected results
