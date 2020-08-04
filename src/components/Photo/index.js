import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import Description from '../Description';

const size = `${Dimensions.get('screen').width}px`;

const PhotoImg = styled.Image`
  height: ${size};
  width: ${size};
  margin: 3px;
`;

const Photo = ({url, username, description}) => (
  <>
    <PhotoImg source={{uri: url}} />
    <Description username={username} description={description} />
  </>
);

export default Photo;
