import React, { useRef } from 'react';
import Drawer from 'react-native-drawer';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../Header';
import DrawerView from '../Drawer';

import styles from './styles';

const Container = ({ children, title, navigation, add, back }) => {
  const _drawer = useRef(null);

  const openMenu = () => _drawer.current.open();

  return (
    <Drawer
      ref={_drawer}
      content={<DrawerView current={title} navigation={navigation}/>}
      openDrawerOffset={0.3}
      tapToClose={true}
      side='left'
    >
      <SafeAreaView style={styles.container}>
        <Header
          add={add}
          back={back}
          title={title}
          onPress={openMenu}
        />
        { children }
      </SafeAreaView>
    </Drawer>
  );
};

export default Container;
