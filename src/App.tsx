import React, { useState } from 'react';
import './App.css';
import { DataType, TodoList } from './TodoList';

function App() {

    let [task, setTask] = useState<Array<DataType>>([
        { taskId: 1, title: "HTML&CSS2", isDone: true },
        { taskId: 2, title: "JS2", isDone: false },
        { taskId: 3, title: "React", isDone: true }
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

    function del(id: number) {
        let r = task.filter(it => it.taskId !== id);
        setTask(r)
    }


    return (
        <div className="App">
            <TodoList filt = {filt} del={del} tasks={y} title='What to learn' />
        </div>
    );
}

export default App;
