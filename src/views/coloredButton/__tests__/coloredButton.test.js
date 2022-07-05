import { render, screen, fireEvent } from '@testing-library/react';
import { ColoredButton } from '../index';
import userEvent from '@testing-library/user-event';

test('toggle button disable after checkbox checks', () => {
  render(<ColoredButton />);
  const checkbox = screen.getByRole('checkbox', { name: 'Check for disable' });
  const colorButton = screen.getByRole('button', { name: 'Click to blue' });
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('flow color button and checkbox', () => {
  render(<ColoredButton />);
  const checkbox = screen.getByRole('checkbox', { name: 'Check for disable' });
  const colorButton = screen.getByRole('button', { name: 'Click to blue' });
  userEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
  userEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  userEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  userEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
  userEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
});
