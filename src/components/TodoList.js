import React from "react";

import Todo from "../components/Todo"



export default function TodoList({ todos, todoDelete, todoCompleted }) {


    return(
<div>
<h1 className="text-right"> Todo List </h1>

{ 
    todos.map(item => 
    
    <Todo 
      key={item.id}
      todo={item}
      todoDelete={todoDelete}
      todoCompleted={todoCompleted}  
      /> )
}

</div>
    )
}