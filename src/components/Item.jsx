import Items from "./Items";

const Item = ({ items, onDeleteItems, onEditItems, onToggleItems }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Items
            key={item.id}
            item={item}
            onDeleteItems={onDeleteItems}
            onEditItems={onEditItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
    </div>
  );
};

export default Item;
