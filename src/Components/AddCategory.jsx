import { useState } from "react";

const AddCategory = ({ onNewItem }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return
    onNewItem(inputValue.trim())
    setinputValue('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Search a gif here'
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default AddCategory;
