import React, { useState } from "react";

export default function Item(props) {
  const [isEditable, setIsEditable] = useState(false);
  const [item, setItem] = useState(props.item);
  const [cal, setCal] = useState(props.cal);

  const handleSubmit = (e) => {
    if (!item || !cal) {
      alert("empty fields are not allowed");
    } else {
      console.log(item);
      props.editItem(props.index, { item: item, cal: cal });
    }
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="box">
        {isEditable ? (
          <div className="col">
            <div className="form-group ">
              <input
                type="text"
                className="form-control"
                placeholder="Item Name"
                name="item"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
            </div>
          </div>
        ) : (
          <h5>{props.item}</h5>
        )}

        {isEditable ? (
          <div className="col">
            <div className="form-group ">
              <input
                type="number"
                className="form-control"
                placeholder="Calorie Amount"
                name="calorie"
                value={cal}
                onChange={(e) => setCal(e.target.value)}
              />
            </div>
          </div>
        ) : (
          <p>You have consumed {props.cal} calories</p>
        )}

        <button
          className="btn btn-danger delete"
          onClick={() => {
            props.deleteItem(props.index);
          }}
        >
          Delete
        </button>
        {isEditable ? (
          <button
            className="btn btn-primary edit"
            onClick={(e) => {
              setIsEditable(false);
              handleSubmit(e);
            }}
          >
            Done
          </button>
        ) : (
          <button
            className="btn btn-primary edit"
            onClick={() => {
              setIsEditable(true);
            }}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}
