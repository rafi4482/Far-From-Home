import { useState } from "react";

const Form = () => {
  const [description, setDescription] = useState("");
  const [option, setOption] = useState("packed");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="add-form" onSubmit={handleSubmit}>
      <h3>What to pack for your next 🚗 trip? </h3>
      <select
        value={option}
        onChange={(event) => setOption(event.target.value)}
      >
        <option value="all">All</option>
        <option value="packed">Packed</option>
        <option value="unpacked">Unpacked</option>
      </select>
      <input
        type="text"
        placeholder="Add an item..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button>Add</button>
    </div>
  );
};

export default Form;
