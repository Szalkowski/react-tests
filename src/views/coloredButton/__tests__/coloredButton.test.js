import { render, screen, fireEvent } from '@testing-library/react';
import { ColoredButton } from '../index';
import userEvent from '@testing-library/user-event';

test('toggle button disable after checkbox checks', () => {
  render(<ColoredButton />);
  const checkbox = screen.getByRole('checkbox', { name: 'Check for disable' });
  const colorButton = screen.getByRole('button', {
    name: 'Click to Midnight Blue',
  });
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('flow color button and checkbox', () => {
  render(<ColoredButton />);
  const checkbox = screen.getByRole('checkbox', { name: 'Check for disable' });
  const colorButton = screen.getByRole('button', {
    name: 'Click to Midnight Blue',
  });
  userEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
  userEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'medium violet red' });
  userEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'midnight blue' });
  userEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
  userEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'midnight blue' });
});
