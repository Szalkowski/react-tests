import { ColoredButton } from './views/coloredButton';

export function replaceCamelWithSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  return <ColoredButton />;
}

export default App;
