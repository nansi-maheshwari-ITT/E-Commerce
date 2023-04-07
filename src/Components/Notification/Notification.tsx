import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface NotificationProps {
  text: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const NotificationWrapper = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background-color: green;
  color: #333;
  text-align: center;
  opacity: ${props => (props.show ? '1' : '0')};
  animation: ${props => (props.show ? fadeIn : fadeOut)} 0.3s ease-in-out;
  z-index: 999;
`;

const Notification: React.FC<NotificationProps> = ({ text }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
	console.log("h");
	const timeout = setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []);

  return (
    <NotificationWrapper show={show}>
      {text}
    </NotificationWrapper>
  );
};

export default Notification;
