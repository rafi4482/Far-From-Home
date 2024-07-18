import { useState } from "react";

const Items = ({ item, onDeleteItems, onEditItems, onToggleItems }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(item.description);
  const [newQuantity, setNewQuantity] = useState(item.quantity);

  const handleSave = () => {
    onEditItems(item.id, {
      description: newDescription,
      quantity: newQuantity,
    });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newDescription}
            onChange={(event) => setNewDescription(event.target.value)}
          />
          <input
            type="number"
            value={newQuantity}
            onChange={(event) => setNewQuantity(Number(event.target.value))}
          />
          <button style={{ color: "chartreuse" }} onClick={handleSave}>
            Save
          </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            value={item.packed}
            onChange={() => onToggleItems(item.id)}
          />
          <span>{item.quantity}</span>

          <span>{item.description}</span>
          <button onClick={() => onDeleteItems(item.id)}>❌</button>

          <button
            style={{ color: "orange" }}
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </>
      )}
    </li>
  );
};

export default Items;
