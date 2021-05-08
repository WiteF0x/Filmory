import React from 'react';

import Container from '../../../components/Container';
import Viewed from './Viewed';

const ViewedScreen = ({ navigation }) => (
  <Container title='Viewed' navigation={navigation}>
    <Viewed/>
  </Container>
);

export default ViewedScreen;
