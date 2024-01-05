import React from "react"
import styled from "styled-components"


type ButtonPropsType = {
    title: string
    func?: () => void
    margin?: ButtonStyledPropsType
    isDisabled?: boolean
}

type ButtonStyledPropsType = {
    property: string
    value: number | string
}
type ButtonStyledProps = {
    $margin?: ButtonStyledPropsType
}


export const Button: React.FC<ButtonPropsType> = ({ title, func, margin, isDisabled }) => {
    return <ButtonStyled  disabled = {isDisabled} $margin = {margin} onClick={func}>{title}</ButtonStyled>
}


const ButtonStyled = styled.button<ButtonStyledProps>`
${({$margin}) =>$margin?.property ?? 'margin'}: ${({$margin})=> $margin?.value ?? '0'}px;
`
