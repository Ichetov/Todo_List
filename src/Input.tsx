import styled from "styled-components"
import { Button } from "./Button"
import React, { useRef, useState } from "react"


type InputPropsType = {
    add: (val: string) => void
}

export const Input: React.FC<InputPropsType> = ({ add }) => {
    let [value, SetValue] = useState('');


    let test = useRef<HTMLInputElement>(null);


    // function func() {
    //     if (test.current) {
    //         add(test.current.value);
    //         SetValue('');
    //     }
    // }

    
    return (
        <InputStyled>
            <input onKeyDown={(e)=> {if(e.key === 'Enter'){add(value);SetValue('') }}} ref={test} onChange={(e) => SetValue(e.target.value)} value={value} />
            <Button margin={{ property: 'margin-left', value: 5 }} func={() => {
                add(value)
                SetValue('')
            }} title='+'  isDisabled = {!value} />
        </InputStyled>
    )
}

const InputStyled = styled.div`
margin-bottom: 10px;
`