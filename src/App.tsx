import ColorPreview from "./components/ColorPreview";
import ColorButton from "./components/ColorButton";
import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");
  const inputRef = useRef<HTMLInputElement>(null);
  const colors = [
    "Violet",
    "Indigo",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Red",
  ];
  return (
    <>
      <h1>Color Palette Picker</h1>
      <p>Click on a color button to see the preview.</p>
      <div>
        <ColorPreview color={color} />
      </div>
      <div className="btn-container">
        <div>
          {colors.map((color) => (
            <ColorButton
              color={color}
              onClick={() => setColor(color)}
              btnName={color}
            ></ColorButton>
          ))}
        </div>
        <div>
          <ColorButton
            color={""}
            onClick={() => setColor("")}
            btnName={"Reset"}
          ></ColorButton>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Enter Hex value" ref={inputRef} />
          <button onClick={() => setColor("#" + inputRef.current?.value)}>
            Set Color
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
