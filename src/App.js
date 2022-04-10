import { useState } from "react";
import "./styles.css";
import List from "./List";

export default function App() {
  const [todo, setTodo] = useState("");
  const [currentitem, updateitem] = useState([]);

  const onchangehandler = (e) => {
    setTodo(e.target.value);
  };
  const additem = () => {
    updateitem([...currentitem, { item: todo, key: Date.now() }]);
    setTodo("");
  };

  return (
    <>
      <div className="wrapper">
        <div className="inputwrapper">
          <form>
            <input type="text" value={todo} onChange={onchangehandler} />
            <button onClick={additem}>add</button>
          </form>

          {/* <List currentitem={currentitem} updateitemlist={updateitem} /> */}
        </div>
        <List currentitem={currentitem} updateitemlist={updateitem} />
      </div>
      {/* <List currentitem={currentitem} updateitemlist={updateitem} /> */}
    </>
  );
}
