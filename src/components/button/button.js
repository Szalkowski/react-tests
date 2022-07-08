import { useState } from 'react';
import { replaceCamelWithSpace } from '../../App';

export const Button = (props) => {
  const [colorButton, setColorButton] = useState('MediumVioletRed');
  const newColorButton =
    colorButton === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div>
      <button
        style={{
          backgroundColor: props.disabled ? 'gray' : colorButton,
        }}
        onClick={() => setColorButton(newColorButton)}
        disabled={props.disabled}
      >
        Click to {replaceCamelWithSpace(newColorButton)}
      </button>
    </div>
  );
};
