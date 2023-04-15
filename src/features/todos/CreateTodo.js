import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "./todosSlice";

function CreateTodo() {
  const [text, setText]= useState("")
  const dispatch = useDispatch();

  function handleSumbit(e) {
    e.preventDefault();
    dispatch(todoAdded(text))
    setText("")
  }
  return <div>
     <form onSubmit={handleSumbit}>
        <p>
          <label>add todo</label>
          <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
        </p>
        <input type="submit" />
      </form>
      <p>Form Text: {text}</p>
  </div>;
}

export default CreateTodo;
