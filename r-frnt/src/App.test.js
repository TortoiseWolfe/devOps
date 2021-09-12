import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GitHub repository link', () => {
  render(<App />);
  const linkElement = screen.getByText(/GitHub repository/i);
  expect(linkElement).toBeInTheDocument();
});
