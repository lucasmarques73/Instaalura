import React from 'react';
import styled from 'styled-components/native';

import LikedIcon from '../Icons/LikedIcon';
import LikeIcon from '../Icons/LikeIcon';

const LikeWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 3px;
`;

const LikeText = styled.Text``;

const Like = ({youLiked, qtLikes}) => (
  <LikeWrapper>
    {youLiked ? <LikedIcon /> : <LikeIcon />}
    <LikeText>
      {qtLikes} {qtLikes === 1 ? 'like' : 'likes'}
    </LikeText>
  </LikeWrapper>
);

export default Like;
