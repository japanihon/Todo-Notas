import React from "react";


export default function TodoForm({ todoAdd }) {


const [formValues, setFormValues] = React.useState({
    title: "",
    description: ""
})

function handleInputChange(event) {
setFormValues({...formValues,
    [event.target.name] : event.target.value
})
}

function handleSubmit(event) {
    event.preventDefault();

    todoAdd(formValues);
}

    return(
<div>
<h1> Nueva Tarea </h1>
<form onSubmit={handleSubmit}>
<input 
type="text" 
placeholder="Titulo" 
className="form-control" 
value={formValues.title}
name="title" 
onChange={handleInputChange}
/>
<textarea 
placeholder="Descripcion" 
className="form-control mt-2"
value={formValues.description}
name="description" 
onChange={handleInputChange}
> 
</textarea>
<button 
className="btn btn-primary btn-block mt-2" 
> Agregar Tarea 
</button>
</form>
</div>
    );
}