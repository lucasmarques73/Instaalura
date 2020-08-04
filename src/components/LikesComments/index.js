import React, {useState} from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

import Comments from '../Comments';
import Like from '../Like';

import CommentIcon from '../Icons/CommentIcon';
import SendIcon from '../Icons/SendIcon';

const LikeCommentWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const InputCommentWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 3px;
  background-color: #ededed;
`;

const InputComment = styled.TextInput`
  flex: 1;
`;

const LikesComments = ({youLiked, qtLikesServer, commentsServer}) => {
  const [showInputComment, setShowInputComment] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(commentsServer);

  const [liked, setLiked] = useState(youLiked);
  const [qtLikes, setQtLikes] = useState(qtLikesServer);

  const likedPhoto = () => {
    setLiked(!liked);
    setQtLikes((prevQtLikes) => (!liked ? prevQtLikes + 1 : prevQtLikes - 1));
  };

  const addNewComment = () => {
    const newComment = {
      date: Date.now(),
      text: comment,
      userName: 'lucas',
    };
    setComments([...comments, newComment]);
    setComment('');
    setShowInputComment(false);
  };

  return (
    <>
      <LikeCommentWrapper>
        <TouchableOpacity onPress={() => likedPhoto()}>
          <Like youLiked={liked} qtLikes={qtLikes} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowInputComment(!showInputComment)}>
          <CommentIcon />
        </TouchableOpacity>
      </LikeCommentWrapper>
      {showInputComment ? (
        <InputCommentWrapper>
          <InputComment
            placeholder="Add your comment..."
            onChangeText={(text) => setComment(text)}
            value={comment}
          />
          <TouchableOpacity onPress={() => addNewComment()}>
            <SendIcon />
          </TouchableOpacity>
        </InputCommentWrapper>
      ) : null}
      <Comments comments={comments} />
    </>
  );
};

export default LikesComments;
