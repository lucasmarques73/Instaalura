import React from 'react';
import styled from 'styled-components/native';

const SendWrapper = styled.Image`
  height: 30px;
  width: 30px;
  margin: 5px;
`;

const SendIcon = () => (
  <SendWrapper source={require('../../images/send.png')} />
);

export default SendIcon;
