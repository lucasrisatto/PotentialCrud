import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.button`
  background: #0000FF;
  height: 42px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #ffff;
  width: 100%;
  font-weight: 500;
  margin-top: 40px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, "#191970")};
  }
`;
