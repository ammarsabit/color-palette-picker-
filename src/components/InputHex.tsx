const InputHex = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="Enter Hex value" />
        <button onClick={() => console.log(input.value)}>Set Color</button>
        
      </div>
    </>
  );
};

export default InputHex;
