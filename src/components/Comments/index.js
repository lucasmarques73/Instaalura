import React from 'react';
import {FlatList} from 'react-native';

import Comment from '../Comment';

const Comments = ({comments}) => (
  <FlatList
    data={comments}
    keyExtractor={(_, index) => index.toString()}
    renderItem={({item}) => (
      <Comment username={item.userName} text={item.text} />
    )}
  />
);

export default Comments;
