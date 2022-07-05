import {fireEvent, render, screen} from "@testing-library/react";
import {Checkbox} from "../checkbox";

test('checkbox is unchecked on init', () => {
    render(<Checkbox/>)
    const checkbox = screen.getByRole('checkbox', {name: 'Check for disable'})
    expect(checkbox).not.toBeChecked();
})

test('checkbox is checked after click', () => {
    render(<Checkbox/>)
    const checkbox = screen.getByRole('checkbox', {name: 'Check for disable'})
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
})