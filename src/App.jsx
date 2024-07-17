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

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <Item items={items} />
      <Footer />
    </div>
  );
}

export default App;
