import styled from "styled-components"
import iconRemove from "./img/tinder-png--1000.png"


type CardTaskPropsType = {
    taskId: string
    isDone: boolean
    title: string
    del: (value: string) => void
}


export const CardTask: React.FC<CardTaskPropsType> = ({taskId, isDone, title, del}) => {
    return (
        <ListStyled ><input type="checkbox" onChange = {()=>(null)}  checked={isDone} />
            <span>{title}</span>
            <RemoveStyled onClick={() => del(taskId)}><Img src={iconRemove}></Img></RemoveStyled>
        </ListStyled>
    )
}


const ListStyled = styled.li`
list-style: none;
`

const RemoveStyled = styled.span`
 cursor: pointer;
 position: relative;
`

const Img = styled.img`
width: 20px;
position: absolute;
top: 2px;
`