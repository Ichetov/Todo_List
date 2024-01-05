import React, { useState } from 'react';
import './App.css';
import { DataType, TodoList } from './TodoList';
import { v1 } from 'uuid';

function App() {

    let [task, setTask] = useState<Array<DataType>>([
        { taskId: v1(), title: "HTML&CSS2", isDone: true },
        { taskId: v1(), title: "JS2", isDone: false },
        { taskId: v1(), title: "React", isDone: true }
    ])

    let [val, setVal] = useState('All');

    let y = task;


    function filt(value: string) {
        setVal(value);
    }


    switch (val) {

        case 'Active':
            y = y.filter(it => it.isDone === true);
            break;
        case 'Completed':
            y = y.filter(it => it.isDone === false);
    }

    function del(id: string) {
        let r = task.filter(it => it.taskId !== id);
        setTask(r)
    }

    function add(val: string) {
        if (val !== '') {
            let newObj: DataType = { taskId: v1(), title: val, isDone: false }
            setTask([...task, newObj])
        }

    }


    return (
        <div className="App">
            <TodoList add={add} filt={filt} del={del} tasks={y} title='What to learn' />
        </div>
    );
}




export default App;
