import Items from "./Items";

const Item = ({ items, onDeleteItems, onEditItems }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Items
            key={item.id}
            item={item}
            onDeleteItems={onDeleteItems}
            onEditItems={onEditItems}
          />
        ))}
      </ul>
    </div>
  );
};

export default Item;
