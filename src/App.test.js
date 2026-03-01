import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app header logo', () => {
  render(<App />);
  const logoImage = screen.getByAltText(/logo/i);
  expect(logoImage).toBeInTheDocument();
});
