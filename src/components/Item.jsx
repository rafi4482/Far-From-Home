import Items from "./Items";

const Item = ({ items }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Items key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Item;
