import React from 'react';
import styled from 'styled-components/native';

const DescriptionWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 3px;
`;

const DescriptionUser = styled.Text`
  font-weight: bold;
`;

const DescriptionText = styled.Text`
  margin-left: 3px;
`;

const Description = ({username, description}) => (
  <DescriptionWrapper>
    <DescriptionUser>{username}</DescriptionUser>
    <DescriptionText>{description}</DescriptionText>
  </DescriptionWrapper>
);

export default Description;
