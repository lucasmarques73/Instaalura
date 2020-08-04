import React from 'react';
import styled from 'styled-components/native';
import Avatar from '../Avatar';

const ProfileWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Username = styled.Text`
  font-weight: bold;
`;

const Profile = ({avarUrl, username}) => (
  <ProfileWrapper>
    <Avatar url={avarUrl} />
    <Username>{username}</Username>
  </ProfileWrapper>
);

export default Profile;
