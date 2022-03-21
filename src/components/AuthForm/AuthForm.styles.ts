import styled from "styled-components";

export const AuthContainer = styled.div`
  max-width: 358px;
  min-height: 430px;
  margin: 60px auto 0;
`

export const AuthTitle = styled.h2`
  text-align: center;
`

export const AuthFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: 0;
`

export const AuthInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 2px solid #CCCCCC;  ;
  margin-top: 30px;
  color: #ffffff;
  background-color: #000000;
  line-height: 17px;
  height: 27px;
  &:first-of-type {
    margin-top: 0;
  }
`

export const AuthSubmit = styled.button`
  font-size: 18px;
  line-height: 22px;
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 2px;
  background-color: #ffffff;
  margin: 216px 0 0 0;
`
