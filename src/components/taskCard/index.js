const TaskCard = (props) => {
    return (
        <div className="TaskCard">
            <span>{props.tarefa.text}</span>
            <input type="submit" name={props.tarefa.id} value="Delete" onClick={props.onDelete} />
            <input type="submit" name={props.tarefa.id} value = "Update" onClick={props.onUpdate}/>
        </div>
    )
}


export default TaskCard;