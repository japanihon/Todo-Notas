import React from "react";

export default function TodoList() {
    return(
<div>
<h1> Todo List </h1>
<div className="card">
    <div className="card-body">
        <h3 className="card-title">
          Titulo de la Tarea
        </h3>
<p className="card-text">
   Descripcion de la Tarea
</p>
        </div>
    </div>
</div>
    )
}