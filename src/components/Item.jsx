import Items from "./Items";

const Item = ({ items, onDeleteItems }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Items key={item.id} item={item} onDeleteItems={onDeleteItems} />
        ))}
      </ul>
    </div>
  );
};

export default Item;
