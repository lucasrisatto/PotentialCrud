import styled, { css } from "styled-components";

interface ContentProps {
  isFocused?: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
  span {
    font-size: 12px;
    color: #c53030;
    text-align: left;
  }
`;

export const Content = styled.div<ContentProps>`
  background: #F0FFF0;
  border-radius: 8px;
  
  border: 2px solid #232129;
  color: #000;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
      margin-bottom: 2px;
    `}

  margin-bottom: 10px;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #007bff;
      color: #007bff;
      box-shadow: 0 0 3px 3px rgba(10, 104, 180, 0.1);
      transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    `}

  div.react-select__control {
    width: 100%;
    height: 32px;
    border: 0px;
    background: transparent;
    &::placeholder {
      color: #000;
    }
  }
`;
