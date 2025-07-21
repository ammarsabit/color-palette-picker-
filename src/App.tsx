import ColorPreview from "./components/ColorPreview";
import ColorButton from "./components/ColorButton";
import InputHex from "./components/InputHex";
import { useState } from "react";
import "./App.css"

function App() {
  const [color, setColor] = useState('white')
  return (
    <>
      <h1>Color Palette Picker</h1>
      <p>Click on a color button to see the preview.</p>
      <div>
        <ColorPreview color={color} />
      </div>
      <div className="btn-container">
        <ColorButton color="Violet" onClick={() => setColor('Violet')} btnName="Violet"></ColorButton>
        <ColorButton color="Indigo" onClick={() => setColor('Indigo')} btnName="Indigo"></ColorButton>
        <ColorButton color="Blue" onClick={() => setColor('Blue')} btnName="Blue"></ColorButton>
        <ColorButton color="Green" onClick={() => setColor('Green')} btnName="Green"></ColorButton>
        <ColorButton color="Yellow" onClick={() => setColor('Yellow')} btnName="Yellow"></ColorButton>
        <ColorButton color="Orange" onClick={() => setColor('Orange')} btnName="Orange"></ColorButton>
        <ColorButton color="Red" onClick={() => setColor('Red')} btnName="Red"></ColorButton>
        <ColorButton color="white" onClick={() => setColor('')} btnName="Reset"></ColorButton>
        <InputHex />
      </div>
    </>
  );
}

export default App;
