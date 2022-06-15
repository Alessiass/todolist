import React, { Component, useState } from "react";
import { addTodo } from "../actions/actions";
import { connect } from "react-redux";
import store from "../store";

export function TodoList(){ 

    const [taskText, taskState] = useState("");

return <div>
        <input onChange={(evt)=>taskState(evt.target.value)}/>
        <button onClick={()=>store.dispatch(addTodo(taskText))}></button>
</div>
}