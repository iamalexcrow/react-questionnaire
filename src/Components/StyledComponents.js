import React from 'react';
import styled from 'styled-components';

 export const FormWrapper = styled.form`
display: grid;
grid-template-rows: 1fr 2fr auto;
grid-template-columns: 1fr;
background-color: white;
padding: 17px;
box-sizing: border-box;
border-radius: 20px;

.title {
    color: #417eb5;
    border-bottom: 2px solid #bccdef;
}
.options {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.option {
    font-size: 30px;
    font-weight: 600;
    color: #6998c8;
    margin-bottom: 7px;
}
.extra-option {
    display: flex;
    flex-direction: column;
    input {
        height: 25px;
        margin: 10px 0px;
        border: 1px solid #6998c8;
        border-radius: 6px;
        padding: 0 0 0 10px;
    }
}
.button-box {
    display: flex;
    justify-content: flex-end;
}
button {
    border: none;
    padding: 10px;
    color: white;
    background-color: #417eb5;
    border-radius: 5px;
}

button:active {
    background-color: #6998c8;
}`