import { useState } from 'react';

export const Button = (props) => {
  const [colorButton, setColorButton] = useState('red');
  const newColorButton = colorButton === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button
        style={{ backgroundColor: props.disabled ? 'gray' : colorButton }}
        onClick={() => setColorButton(newColorButton)}
        disabled={props.disabled}
      >
        Click to {newColorButton}
      </button>
    </div>
  );
};
