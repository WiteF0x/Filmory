import React from 'react';

import Container from '../../../components/Container';
import Wishes from './Wishes';

const WishesScreen = ({ navigation }) => (
  <Container title='Wishes' navigation={navigation}>
    <Wishes/>
  </Container>
);

export default WishesScreen;
