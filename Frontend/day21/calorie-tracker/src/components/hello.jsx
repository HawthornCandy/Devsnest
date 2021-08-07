import { useState } from "react";
const Form = ({ addItem }) => {
  const [item, setItem] = useState("");
  const [cal, setCal] = useState("");

  const handleSubmit = (e) => {
    if (!item || !cal) {
      alert("empty fields are not allowed");
    } else {
      addItem(item, cal);
      setItem("");
      setCal("");
    }
    e.preventDefault();
  };

  return (
    <form
      className="form-inline"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="form-group">
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
        </div>
        <button className="btn btn-primary submit">Add Item</button>
      </div>
    </form>
  );
};

export default Form;
