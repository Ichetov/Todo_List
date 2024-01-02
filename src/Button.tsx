import React from "react"


type ButtonPropsType = {
 title: string
 func?: () => void
}

export const Button: React.FC<ButtonPropsType> = ({title, func})=>{
    return <button onClick={func}>{title}</button>
}