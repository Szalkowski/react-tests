import { render, screen, fireEvent } from '@testing-library/react';
import { ColoredButton } from '../index';

test('toggle button disable after checkbox checks', () => {
  render(<ColoredButton />);
  const checkbox = screen.getByRole('checkbox', { name: 'Check for disable' });
  const colorButton = screen.getByRole('button', { name: 'Click to blue' });
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
