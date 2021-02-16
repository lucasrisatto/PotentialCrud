import { shade } from "polished";
import styled, { keyframes } from "styled-components";

const appearRight = keyframes`
from {
  opacity: 0;
  transform: translateX(50px);
}

to {
  opacity: 1;
  transform: translateX(0);
}
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #dcdcdc;
`;

export const Content = styled.div`
  width: 650px;
  text-align: center;
  justify-content: center;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.27);

  a {
    cursor: pointer;
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearRight} 2s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  > a {
    color: #f4ede8;
    display: block;
    margin-bottom: 15px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, "#F4EDE8")};
    }

  }
`;
