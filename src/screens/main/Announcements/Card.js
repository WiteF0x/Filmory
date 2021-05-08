import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CountDown from 'react-native-countdown-component';
import Swipeout from 'react-native-swipeout';
import moment from 'moment';

import styles from './styles';

const Delete = () => (
  <View style={styles.delete}>
    <Icon name='trash-outline' size={25} color='white'/>
  </View>
);

const Card = ({ data, card, deleteAnnounc, moveToViewed }) => {
  const [until, _until] = useState(0);
  const [lessThanDay, _lessThanDay] = useState(false);

  const swipeoutBtns = [
    {
      text: 'Viewed',
      backgroundColor: '#FF9500',
      onPress: () => moveToViewed({ film: card }),
    },
    {
      text: 'Favourite',
      backgroundColor: '#5AC8FA',
      onPress: () => null,
    },
    {
      text: 'Delete',
      component: <Delete/>,
      backgroundColor: 'red',
      onPress: () => deleteAnnounc({ card }),
    }
  ]

  useEffect(() => {
    const timer = moment(card.release).valueOf() - moment().valueOf();
    const millisendsInDay = 86400 * 1000;
    timer < millisendsInDay && _lessThanDay(true);
    _until(timer);
  }, []);

  const renderRelease = () => {
    if (until <= 0) {
      return <Text style={styles.releaseDate}>Already released</Text>;
    };

    if (lessThanDay) {
      return (
        <View style={styles.countContainer}>
          <CountDown
            until={until}
            digitStyle={styles.digitStyle}
            digitTxtStyle={styles.digitTxtStyle}
            timeLabelStyle={styles.timeLabelStyle}
            size={15}
            timeToShow={['H', 'M', 'S']}
            timeLabels={{ h: 'Hours', m: 'Mins', s: 'Sec'}}
          />
        </View>
      );
    };

    return (
      <Text style={styles.releaseDate}>Release date: { moment(card.release).format('DD MMM YYYY') }</Text>
    );
  };

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
            { renderRelease() } 
          </View>
        </View>
      </Swipeout>
    </View>
  );
};

export default Card;
