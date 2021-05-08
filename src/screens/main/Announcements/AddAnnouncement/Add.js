import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker'
import { launchImageLibrary } from 'react-native-image-picker';
import moment from 'moment';

import Input from '../../../../components/DefaultInput';

import COLORS from '../../../../constants/colors';

import styles from './styles';

const options = {
  title: 'Select Image',
  mediaType: 'photo',
  maxWidth: 1280,
  maxHeight: 720,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const Add = ({ create, enabled, date, _date, image, _image, about, title, rating, _rating, onChangeTitle, onChangeAbout, showOriginal, toggleOriginalImage }) => {
  const [isOpened, _isOpened] = useState(false);
  const animatedDate = useRef(new Animated.Value(0)).current;

  const open = () => Animated.timing(animatedDate, { toValue: 1, duration: 500 }).start();

  const close = () => Animated.timing(animatedDate, { toValue: 0, duration: 500 }).start(() => _isOpened(false));

  const pickImage = () => launchImageLibrary(options, (response) => {
  
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      _image(response.uri);
    }
  });

  const renderPicker = () => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={pickImage}
      style={styles.pickImage}
    >
      <Icon name='image-outline' size={40} color={COLORS.orange}/>
    </TouchableOpacity>
  );

  const picker = () => {
    if (image) return renderImage();

    return renderPicker();
  };

  const renderImage = () => (
    <>
      <View style={styles.showRow}>
        <TouchableOpacity
          activeOpacity={0.7}
          hitSlop={{ top: 10, right: 5, left: 10 }}
          onPress={toggleOriginalImage}
          style={styles.showOriginalTouch}
        >
          <Text style={styles.showOriginal}>{ showOriginal ? 'Show smooth' : 'Show original'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={pickImage}
        style={styles.imageTouch}
      >
        <Image
          source={{ uri: image }}
          resizeMode={showOriginal ? 'contain' : 'cover'}
          style={styles.image}
        />
      </TouchableOpacity>
    </>
  )

  const renderRating = () => Array(5).fill(null).map((_, i) => 
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => _rating(i + 1)}
      style={[styles.ratingContainer, { backgroundColor: i + 1 <= rating ? COLORS.orange : COLORS.black }]}
    >
      <Text style={[styles.rating, { color: i + 1 <= rating ? COLORS.black : COLORS.orange }]}>{ i + 1 }</Text>
    </TouchableOpacity>
  );

  const bottom = () => (
    <View style={styles.bottom}>
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={!enabled}
        hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
        onPress={create}
        style={[styles.bottomTouch]}
      >
        <Text style={[styles.create, { opacity: enabled ? 1 : 0.5 }]}>Create</Text>
      </TouchableOpacity>
    </View>
  );

  const toggleDate = () => {
    if (isOpened) {
      // _isOpened(!isOpened);
      close();
    } else {
      _isOpened(!isOpened);
      open();
    }
  }

  const renderDate = () => {
    const scaleX = animatedDate.interpolate({
      inputRange: [0, 1],
      outputRange: [60, 180],
    });

    const opacity = animatedDate.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    const rotate = animatedDate.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });

    return (
      <Animated.View style={[styles.animatedDate, { height: scaleX  }]}>
        <Text style={styles.dateLabel}>Release date</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={toggleDate}
          style={styles.dateContainer}
        >
          <Text style={styles.date}>{ moment(date).format('DD MMM YYYY') }</Text>
          <Animated.View style={[styles.arrow, { transform: [{ rotate }] }]}>
            <Icon name='caret-up-outline' size={20} color={COLORS.light_orange}/>
          </Animated.View>
        </TouchableOpacity>
        <Animated.View style={{ opacity, alignItems: 'center', width: '100%' }}>
          { isOpened && (<DatePicker
            date={date}
            mode="date"
            textColor={COLORS.orange}
            onDateChange={_date}
            style={{ height: 135 }}
            minimumDate={new Date()}
            disabled={true}
          />)}
        </Animated.View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainerStyle}>
        { picker() }

        <Input
          label='Movie title'
          value={title}
          onChangeText={onChangeTitle}
          placeholder='Movie title'
        />
        <Input
          label='What is it about?'
          value={about}
          onChangeText={onChangeAbout}
          placeholder='What is it about?'
          containerStyles={{
            marginTop: 21
          }}
        />

        { renderDate() }

        <Text style={styles.ratingLabel}>Rating (Priority)</Text>
        <View style={styles.ratingRow}>
          { renderRating() }
        </View>

      </ScrollView>
      { bottom() }
    </View>
  );
};

export default Add;
