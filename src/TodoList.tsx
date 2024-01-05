import styled from "styled-components"
import { Button } from "./Button"
import { CardTask } from "./CardTask"
import { Input } from "./Input"
import { TitleHeader } from "./TitleHeader"


type TodoListType = {
    title: string
    tasks: DataType[]
    del: (id: string) => void
    filt: (value: string) => void
    add: (value: string) => void
}

export type DataType = {
    taskId: string
    title: string
    isDone: boolean
}

export const TodoList: React.FC<TodoListType> = ({ title, tasks, del, filt, add }) => {

    let c = tasks.length !== 0 ? <ul>{tasks.map(item => {
        return <CardTask key={item.taskId} taskId={item.taskId} isDone={item.isDone} title={item.title} del={del} />
    })}</ul> : <div>Список пуст</div>
    return (
        <TodoListStyled>
            <TitleHeader title={title} />
            <Input add={add} />
            {c}
            <div>
                <Button margin={{ property: 'margin-right', value: 8 }} func={() => filt('All')} title='All' />
                <Button margin={{ property: 'margin-right', value: 8 }} func={() => filt('Active')} title='Active' />
                <Button func={() => filt('Completed')} title='Completed' />
            </div>
        </TodoListStyled>
    )
}

const TodoListStyled = styled.div`
 border: 1px solid black;
 padding: 10px;
 background-color: #83c7bf42;
 border-radius: 10px;
`

