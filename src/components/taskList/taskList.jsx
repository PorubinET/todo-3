import React from "react";
import TaskItem from "../taskItem/taskItem";
import './taskList.scss';

const TaskList = ({data, onDelete, doneTasks, changeTask, dataValue, updateData}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <TaskItem 
                key={id}
                index={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                doneTasks={() => doneTasks(id)}
                changeTask={changeTask}
                dataValue={dataValue}
                updateData={updateData}
            />
        )
    })


    return (
        <div className="to-do__tasks__item">
            <ul className="to-do__list">
                {elements}
            </ul>
        </div>
    );
}


export default TaskList;



