import "./ColorPreview.css";

interface Props {
  color?: string;
}
const ColorPreview = ({ color = 'white' }: Props) => {
  return (
    <div color={color} className="container" style={{ backgroundColor: color }}>
      ColorPreview
    </div>
  );
};

export default ColorPreview;
