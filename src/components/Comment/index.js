import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const CommentWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 3px;
`;

const CommentUser = styled.Text`
  font-weight: bold;
  margin-right: 3px;
`;

const Comment = ({username, text}) => (
  <CommentWrapper>
    <CommentUser>{username}</CommentUser>
    <Text>{text}</Text>
  </CommentWrapper>
);

export default Comment;
