import { useState } from 'react';

export function replaceCamelWithSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [colorButton, setColorButton] = useState('red');
  const newColorButton = colorButton === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        style={{ backgroundColor: colorButton }}
        onClick={() => setColorButton(newColorButton)}
      >
        Change to {newColorButton}
      </button>
      <label htmlFor={'checkbox'}>Check for disable</label>
      <input type={'checkbox'} />
    </div>
  );
}

export default App;
