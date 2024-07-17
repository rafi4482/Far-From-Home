import React from "react";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="add-form" onSubmit={handleSubmit}>
      <h3>What to pack for your next 🚗 trip? </h3>
      <select>
        <option value="all">All</option>
        <option value="packed">Packed</option>
        <option value="unpacked">Unpacked</option>
      </select>
      <input type="text" placeholder="Add an item..." />
      <button>Add</button>
    </div>
  );
};

export default Form;
