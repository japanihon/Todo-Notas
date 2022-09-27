import React from "react";

export default function Todo({ todo, todoDelete, todoCompleted }) 

{
return (
<div className="card mt-5">
    <div className="card-body">
        <h3 className="card-title me-2 text-end">
          {todo.title}
          <button 
          className="btn btn-sm btn-outline-success ml-2"
          onClick={() => todoCompleted(todo.id)}
          >
           { todo.completed ? 'Terminado' : 'Terminar'}
          </button>
        </h3>
<p className="card-text me-2 text-end">
   {todo.description}
</p>
<div className="d-flex justify-content-end">
<button className="btn btn-outline-primary mr-2">
 Editar
</button>

<button
 onClick={() => todoDelete(todo.id)}
 className="btn btn-outline-danger"
>
 Eliminar
</button>
     </div>  
      </div>
    </div>
)

}

