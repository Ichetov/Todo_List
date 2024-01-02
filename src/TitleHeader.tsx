import React from "react"

type TitleHeaderType = {
    title: string
}

export const TitleHeader: React.FC<TitleHeaderType> = ({title})=>{
    return(
        <h3>{title}</h3>
    )
}