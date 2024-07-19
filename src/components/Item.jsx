import { useState } from "react";
import Items from "./Items";

const Item = ({
  items,
  onDeleteItems,
  onEditItems,
  onToggleItems,
  onClearItems,
}) => {
  const [sortby, setSortBy] = useState("input");

  let sortedItems;

  if (sortby === "input") sortedItems = items;

  if (sortby === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortby === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Items
            key={item.id}
            item={item}
            onDeleteItems={onDeleteItems}
            onEditItems={onEditItems}
            onToggleItems={onToggleItems}
            onClearItems={onClearItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortby}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear Items</button>
      </div>
    </div>
  );
};

export default Item;
