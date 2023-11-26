import React from 'react';
import styled from 'styled-components'
import style from "../SettingCounter/Setting.module.css";

const StyleInput = styled.input`
  padding: 8px 14px;
  background: transparent;
  border:1px solid pink;
  color: green;
 &:hover{
   border:   1px solid red;
 }
`
type PropsType ={

}

const InputComponent = () => {
    return (
        <StyleInput >

            
        </StyleInput>
    );
};

export default InputComponent;