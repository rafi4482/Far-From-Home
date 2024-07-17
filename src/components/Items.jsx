const Items = ({ item, onDeleteItems }) => {
  return (
    <li>
      <span
        style={{
          textDecoration: item.packed ? "line-through" : "none",
        }}
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
};

export default Items;
