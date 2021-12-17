import React from "react";
import './board.scss'


const Board = (props) => {
    const {tasksDone, allDelete} = props;
    const buttonsData = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'compleated', label: 'Completed'}
    ];

        const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? "to-do__active" : "to-do__board-btn btn"
        return (
            <button 
                className={`to-do__board-btn btn ${clazz}`}
                type="button"
                onClick={() => props.onFilterSelect(name)}
                key={name}>
                {label}
            </button>
        )
    })

    return (
        <div className="to-do__board">
            <p className="to-do__board-list-items">{tasksDone} item left</p>
            <label className="to-do__board-check">
                {buttons}
            </label>
            <div className="to-do__board-list-btn">
                <button className="to-do__board-btn btn" onClick={allDelete}>Clear completed</button>
            </div>
        </div>
    )
}



export default Board;