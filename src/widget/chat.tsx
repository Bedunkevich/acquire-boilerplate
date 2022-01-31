import { FC } from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
`;

const ActionButton = styled.div`
  width: 50px;
  height: 50px;
  background: red;
  color: white;
  cursor: pointer;
`;

type ChatProps = {
  clientID: string;
};

export const Chat: FC<ChatProps> = ({ clientID }) => {
  return (
    <ChatContainer>
      <ActionButton onClick={() => alert(`Hi, ${clientID}`)}>Click Me</ActionButton>
    </ChatContainer>
  );
};
