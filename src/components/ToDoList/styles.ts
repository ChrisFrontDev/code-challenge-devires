import styled from 'styled-components';

export const ToDoListContainer = styled.div`
  padding: 16px 0 16px 0;
  overflow-y: auto;
  max-height: 80vh;
  h3 + div {
    margin-top: 32px;
  }
`;

export const ToDoListTitle = styled.h3`
  margin-top: 53px;
  font-size: 16px;
  letter-spacing: 0.075em;
  color: #97b4ff;
  opacity: 0.8;
`;
