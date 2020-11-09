import styled from 'styled-components';

export const TodoContainer = styled.div`
  max-width: 940px;
  display: flex;
  margin: 16px 0 0 0;
  border-radius: 16px;
  padding: 16px;
  background: #041955;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 1px 5px rgba(0, 0, 0, 0.2);
  div {
    flex: 1;
  }

  p {
    word-break: break-all;
    white-space: normal;
    opacity: 0.9;
    margin-top: 8px;
    font-weight: 300;
  }
`;
