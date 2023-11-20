import React from 'react';
import styled from 'styled-components'

const StyleButton = styled.button`
  padding: 8px 14px;
  background: aquamarine;
  color: azure;
`
type  PropsType = {
    title: string
    onClick: ()=> void
    disabled: boolean
}
const ButtonComponent = (props: PropsType) => {
    return (
        <StyleButton disabled={props.disabled} onClick={props.onClick}>
            {props.title}
        </StyleButton>
    );
};

export default ButtonComponent;