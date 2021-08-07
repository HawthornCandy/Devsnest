import React from "react";
import Item from "./Item";

export default function Items(props) {
  return (
    <div>
      {props.items.length === 0 ? (
        <h3 className="head">Start Adding Items</h3>
      ) : (
        props.items.map((e) => {
          return (
            <Item
              index={e.index}
              key={e.index}
              item={e.item}
              cal={e.cal}
              deleteItem={props.deleteItem}
              updateItem={props.updateItem}
              editItem={props.editItem}
            />
          );
        })
      )}
    </div>
  );
}
