import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import Card from './Card';

import styles from './styles';

const Announcements = ({ user, deleteAnnounc, moveToViewed }) => {

  return (
    <View style={styles.container}>
      <FlatList
        data={user.announcements}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
          <Card
            data={user.announcements}
            card={item}
            deleteAnnounc={deleteAnnounc}
            moveToViewed={moveToViewed}
          />
        }
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default Announcements;
