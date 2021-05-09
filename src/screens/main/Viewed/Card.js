import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swipeout from 'react-native-swipeout';

import styles from './styles';

const Delete = () => (
  <View style={styles.delete}>
    <Icon name='trash-outline' size={25} color='white'/>
  </View>
);

const Card = ({ card, deleteViewed }) => {

  const swipeoutBtns = [
    {
      text: 'Delete',
      component: <Delete/>,
      backgroundColor: 'red',
      onPress: () => deleteViewed({ card }),
    }
  ]

  return (
    <View key={card._id} style={styles.cardsMargin}>
      <Swipeout right={swipeoutBtns} style={styles.swipeout}>
        <View style={styles.card}>
          <View style={styles.imageView}>
            <Image
              resizeMode='cover'
              source={card.image ? { uri: card.image } : require('../../../../assets/images/defaultFilm.png')}
              style={styles.image}
            />
            <Text style={styles.rating}>Rating {card.rating}/5</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>{ card.title }</Text>
            <Text style={styles.description}>{ card.about }</Text>
          </View>
        </View>
      </Swipeout>
    </View>
  );
};

export default Card;
