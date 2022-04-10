import react from "react";
function List(props) {
  const deleteitem = (key) => {
    const reclist = props.currentitem.filter((items) => {
      return items.key !== key;
    });
    props.updateitemlist(reclist);
  };
  return (
    <div>
      {props.currentitem.map((items) => {
        return (
          <div>
            <h1>{items.item}</h1>
            <button onClick={() => deleteitem(items.key)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default List;
