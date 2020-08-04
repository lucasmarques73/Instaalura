import React from 'react';
import styled from 'styled-components/native';

const AvatarImg = styled.Image`
  height: 30px;
  width: 30px;
  margin: 3px;
  border-radius: 30px;
`;

const Avatar = ({url}) => <AvatarImg source={{uri: url}} />;

export default Avatar;
