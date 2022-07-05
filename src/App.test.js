import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
render(<App/>)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  expect(colorButton).toHaveStyle({backgroundColor:'red`'})
});

test('button turns blue when clicked', () => {
render(<App/>)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})
  expect(colorButton.textContent).toBe('Change to red')
});
test('button starts enabled', () => {
  render(<App/>)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  expect(colorButton).toBeEnabled();
})
test('checkbox starts unchecked', () => {
  render(<App/>)
  const checkbox = screen.getByRole('checkbox', {label: 'Check for disable'})
  expect(checkbox).not.toBeChecked()
})
