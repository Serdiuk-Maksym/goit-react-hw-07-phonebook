import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  background: #f5f5fa;
  border: 0;
  border-radius: 8px;
  box-shadow: -10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17;
  box-sizing: border-box;
  color: #2a1f62;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  justify-content: center;
  line-height: 1.5rem;
  padding: 15px;
  position: relative;
  text-align: left;
  transition: 0.2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: pre;
  width: max-content;
  word-break: normal;
  word-spacing: normal;
  &:hover {
    background: #f8f8ff;
    box-shadow: -15px -15px 30px 0 #fff, 15px 15px 30px 0 #1d0dca17;
  }
`;
export const Li = styled.li`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  color: #2a1f62;
`;
