import React from 'react';
import { View, FlatList } from 'react-native';

import Card from './Card';

import styles from './styles';

const Viewed = ({ user, deleteViewed }) => {

  return (
    <View style={styles.container}>
      <FlatList
        data={user.viewed}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Card card={item} deleteViewed={deleteViewed}/>}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default Viewed;
