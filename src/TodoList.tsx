import { Button } from "./Button"
import { Input } from "./Input"
import { TitleHeader } from "./TitleHeader"


type TodoListType = {
    title: string
    tasks: DataType[]
    del: (id: number) => void
    filt: (value: string) => void
}

export type DataType = {
    taskId: number
    title: string
    isDone: boolean
}

export const TodoList: React.FC<TodoListType> = ({ title, tasks, del, filt }) => {

    let c = tasks.length !== 0 ? tasks.map(item => {
        return <li key={item.taskId}><input type="checkbox" checked={item.isDone} />
            <span>{item.title}</span>
            <span onClick={() => del(item.taskId)}> X</span>
        </li>

    }) : <div>Список пуст</div>

    return (
        <div>
            <TitleHeader title={title} />
            <Input />
            {c}
            <div>
                <Button func={() => filt('All')} title='All' />
                <Button func={() => filt('Active')} title='Active' />
                <Button func={() => filt('Completed')} title='Completed' />
            </div>
        </div>
    )
}

