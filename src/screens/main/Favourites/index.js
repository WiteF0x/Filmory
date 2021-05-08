import React from 'react';

import Container from '../../../components/Container';
import Favourites from './Favourites';

const FavouritesScreen = ({ navigation }) => (
  <Container title='Favourites' navigation={navigation}>
    <Favourites/>
  </Container>
);

export default FavouritesScreen;
