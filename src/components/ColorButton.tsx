import "./ColorButton.css";

interface Props {
  color: string;
  onClick: () => void;
  btnName: string;
}

const ColorButton = ({ color, onClick, btnName }: Props) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {btnName}{" "}
    </button>
  );
};

export default ColorButton;
