import React from 'react';
import styled from 'styled-components/native';

const LikedWrapper = styled.Image`
  height: 30px;
  width: 30px;
  margin: 5px;
`;

const LikedIcon = () => (
  <LikedWrapper source={require('../../images/s2-checked.png')} />
);

export default LikedIcon;
