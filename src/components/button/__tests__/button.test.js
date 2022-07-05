import {render, screen} from "@testing-library/react";
import {Button} from "../button";

test('button is enabled on init', () => {
    render(<Button/>)
    const button = screen.getByRole('button', {name: 'Click to blue'})
    expect(button).toBeEnabled();
})