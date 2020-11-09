import styled from 'styled-components';

export const ToDoListContainer = styled.div`
  padding: 16px 0 16px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  h3 + div {
    margin-top: 32px;
  }
`;
