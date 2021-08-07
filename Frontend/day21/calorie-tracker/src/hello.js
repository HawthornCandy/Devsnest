  
import { useEffect, useState } from "react";
import "./App.css";
import Form from './Components/Form'
import Items from "./Components/Items";

function App() {
  let initItem;
  if (localStorage.getItem('items') === null) {
    initItem = []
  }
  else {
    initItem = JSON.parse(localStorage.getItem('items'))
  }



  function addItem(item, cal) {
    let index;
    if (items.length === 0) {
      index = 1
    }
    else {
      index = items[items.length - 1].index + 1
    }
    let myItem = {
      item: item,
      cal: cal,
      index: index
    }
    setItems([...items, myItem])
  }

  function updateItem(index, newItem) {
    items.map((item, i) => (i === index ? { ...item, ...newItem } : item))
  }

  function deleteItem(index) {
    setItems(
      items.filter((e) => {
        return e.index !== index
      })
    )

  }

  const editItem = (index, newItem) => {
    setItems(
      items.map((item, i) => (i === index ? { ...item, ...newItem } : item))
    );
  };

  const [items, setItems] = useState(initItem)
  useEffect(() => localStorage.setItem('items', JSON.stringify(items)), [items])

  return (
    <div>
      <Form addItem={addItem} />
      <Items items={items} deleteItem={deleteItem} updateItem={updateItem} editItem={editItem} />
    </div>
  );
}

export default App;
