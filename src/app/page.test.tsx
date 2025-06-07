import { render, screen } from '@testing-library/react';
import Page from './page';
import '@testing-library/jest-dom';

describe('Landing Page', () => {
  it('renders without crashing', () => {
    render(<Page />);
    // Check for main sections by text or role
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByTestId('features-section')).toBeInTheDocument();
    expect(screen.getByTestId('pricing-section')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
  });

  it('contains a call-to-action button', () => {
    render(<Page />);
    expect(screen.getByRole('button', { name: /get started|sign up|join/i })).toBeInTheDocument();
  });

  // Add more tests as needed for navigation, responsiveness, etc.
}); 