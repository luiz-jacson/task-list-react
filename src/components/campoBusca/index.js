import { useState } from 'react';
import TaskCard from "../taskCard";
const CampoBusca = () => {
    let [task, setTask] = useState('');
    let [lista, setLista] = useState([]);
    let [edit, setEdit] = useState({
        id : null,
        text : '',
    });
    let obj = {};

    const aoAdicionar = (evento) => {
        evento.preventDefault();
        obj = {
            text: task,
            id: Math.floor(Math.random() * 10000),
        }
        setLista([...lista, obj]);
        console.log(lista);
    }

    const aoDeletar = (evento) => {
        evento.preventDefault();
        console.log(evento.target);
        let arr = lista.map(task => { return task })
        let elemento_id = evento.target.name;
        const delArr = lista.filter(function (value, index, array) {
            console.log(parseInt(elemento_id))
            return arr[index].id !== parseInt(elemento_id)
        })
        setLista([...delArr]);
    }

    const taskDigitada = (evento) => {
        let valor = evento.target.value;
        setTask(valor);
    }

    const aoEditar = (evento) =>{
        evento.preventDefault();
        let arr = lista.map(task => { return task })
        let elemento_id = evento.target.name;
        const edArr = lista.filter(function (value, index, array) {
            console.log(parseInt(elemento_id))
            return arr[index].id === parseInt(elemento_id)
        })
        setEdit({id : edArr[0].id, text: edArr[0].text})
        
        
    }

    const subEditar = (evento) =>{
        evento.preventDefault();
        let arr = lista.map(task => { return task })
        let elemento_id = evento.target.name;
        const subedArr = lista.filter(function(value, index, array){
            if(arr[index].id === parseInt(elemento_id)){
                arr[index].id = edit.id;
                arr[index].text = edit.text;
            }
            return arr[index]
            
        })
        setLista([...subedArr])
        setEdit({
            id:null,
            text:'',
        })
        console.log(subedArr)
    }
    const taskEditada = (evento) => {
        let valor = evento.target.value;
        setEdit({
            id : edit.id,
            text : valor,  
        });
    }





    return (
        <div className="CampoBusca">
            <form onSubmit={aoAdicionar}>
                <h1>Task List</h1>
                <input type="text" onChange={taskDigitada} value={task} />
                <input type="submit" value="Add" />
            </form>
            {lista.map(tarefa =>{
                if(edit.id==tarefa.id)
                    return(
                    <div className="CampoEdita">
                        <form onSubmit={subEditar} name = {tarefa.id}>
                            <input type="text" onChange={taskEditada} value={edit.text} />
                            <input type="submit" value="Editar" />
                        </form>
                    </div>
                    );
                    return(<TaskCard tarefa={tarefa} onDelete={aoDeletar} onUpdate = {aoEditar}/>)
                  
            })}
        </div>
    )
}


export default CampoBusca;