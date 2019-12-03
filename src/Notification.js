import React from 'react';
import styled from 'styled-components';

const NotificationContainer = styled.div`
  background-color: #444;
  color: white;
  padding: 10px;
  position: absolute;
  top: 10px;
  left: 16px;
  z-index: 999;
`;

export default function Notification(props) {
  return (
    <NotificationContainer>{props.message}</NotificationContainer>
  )
}
