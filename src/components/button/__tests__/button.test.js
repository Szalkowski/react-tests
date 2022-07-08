import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../button';

test('button is enabled on init', () => {
  render(<Button />);
  const button = screen.getByRole('button', { name: 'Click to Midnight Blue' });
  expect(button).toBeEnabled();
});

test('button has correct initial color', () => {
  render(<Button />);
  const colorButton = screen.getByRole('button', {
    name: 'Click to Midnight Blue',
  });
  expect(colorButton).toHaveStyle({ backgroundColor: 'medium violet red' });
});

test('button turns blue when clicked', () => {
  render(<Button />);
  const colorButton = screen.getByRole('button', {
    name: 'Click to Midnight Blue',
  });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'midnight blue' });
  expect(colorButton.textContent).toBe('Click to Medium Violet Red');
});
