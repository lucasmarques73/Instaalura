import React from 'react';
import styled from 'styled-components/native';

const CommentWrapper = styled.Image`
  height: 30px;
  width: 30px;
  margin: 5px;
`;

const CommentIcon = () => (
  <CommentWrapper source={require('../../images/comment.png')} />
);

export default CommentIcon;
