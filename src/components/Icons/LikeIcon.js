import React from 'react';
import styled from 'styled-components/native';

const LikeWrapper = styled.Image`
  height: 30px;
  width: 30px;
  margin: 5px;
`;

const LikeIcon = () => <LikeWrapper source={require('../../images/s2.png')} />;

export default LikeIcon;
