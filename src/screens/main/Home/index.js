import React from 'react';

import Home from './Home';
import Container from '../../../components/Container';
import Gallery from './Gallery';

const HomeScreen = ({ navigation }) => {

  return (
    // <Container title='Home'>
      /* <Home/> */
      <Gallery navigation={navigation}/>
    /* </Container> */
  );
};

export default HomeScreen;
