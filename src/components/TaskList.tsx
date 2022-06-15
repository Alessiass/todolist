import React, { Component, useState } from "react";
import { addTodo } from "../actions/actions";
import { connect } from "react-redux";
import store from "../store";

export function TaskList(){ 

    const [taskText, taskState] = useState("");
return <div>
    <button onClick={()=>console.log(store.getState())}></button>
</div>
}