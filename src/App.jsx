import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleEditItems = (id, updatedItem) => {
    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
  };

  const handleToggleItems = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <Item
        items={items}
        onDeleteItems={handleDeleteItems}
        onEditItems={handleEditItems}
        onToggleItems={handleToggleItems}
      />
      <Footer />
    </div>
  );
}

export default App;
