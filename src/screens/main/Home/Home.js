import React, { useRef } from 'react';
import {
  View,
  Text,
} from 'react-native';

import Header from '../../../components/Header';
import DrawerView from '../../../components/Drawer';

import styles from './styles';

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>HOME PAGE CONTENT</Text>
    </View>
  );
};

export default Home;
