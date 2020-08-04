import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

import Profile from './src/components/Profile';
import Photo from './src/components/Photo';
import getFeed from './src/services/getFeed';
import LikesComments from './src/components/LikesComments';
import {Button} from 'react-native';

const Title = styled.Text`
  text-align: center;
  font-weight: bold;
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #fafafa;
`;

const App = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const asyncGetFeed = async () => {
      const res = await getFeed();
      setFeed(res);
    };

    asyncGetFeed();
  }, []);

  return (
    <SafeArea>
      <Title>Insta Alura</Title>
      <FlatList
        data={feed}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          return (
            <>
              <Profile avarUrl={item.userURL} username={item.userName} />
              <Photo
                url={item.url}
                username={item.userName}
                description={item.description}
              />
              <LikesComments
                qtLikesServer={item.likes}
                commentsServer={item.comentarios}
              />
            </>
          );
        }}
      />
      <Button
        title={'Take a photo'}
        onPress={() => console.warn('Not implemented yet!!')}
      />
    </SafeArea>
  );
};

export default App;
