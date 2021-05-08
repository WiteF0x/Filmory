import React, { useEffect, useRef } from 'react'
import {
  View,
  Text,
  Animated,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import COLORS from '../../../constants/colors';
import styles from './styles';

const { width } = Dimensions.get('window');

const Login = (props) => {
  const {
    login,
    setLogin,

    password,
    setPassword,

    signInApp,
    signUp,
  } = props;

  useEffect(() => {
    startAnimation();
  }, []);

  const animation = useRef(new Animated.Value(0)).current;
  const contentAnimation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => Animated.timing(animation, { toValue: 1, duration: 1500, useNativeDriver: true }).start(() => startContentAnimation());
  const startContentAnimation = () => Animated.timing(contentAnimation, { toValue: 1, duration: 1000, useNativeDriver: true }).start();

  const line = () => <View style={styles.line}/>
  
  const opacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const translateY = animation.interpolate({
    inputRange: [0, 0.7, 0.8, 0.9, 1],
    outputRange: [-70, -15, -10, -5, 0],
  });

  const contentOpacity = contentAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const loginTranslateX = contentAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [width / 2, 0],
  });

  const passwordTranslateX = contentAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-width / 2, 0],
  });

  const loginTranslateY = contentAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [40, 0],
  });

  const header = () => (
    <Animated.View
      style={[
        styles.header,
        {
          transform: [{ translateY }],
          opacity,
        }
      ]}
    >
      <Icon name='color-filter-outline' size={75} color={COLORS.orange}/>
      <Text style={styles.headerTitle}>Filmory</Text>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      { header() }
      <Animated.View style={[styles.content, { opacity: contentOpacity }]}>
        <Text style={styles.title}>Please, sign in to continue.</Text>
        { line() }
        <Animated.View style={{ transform: [{ translateX: loginTranslateX }] }}>
          <TextInput
            value={login}
            autoCapitalize='none'
            onChangeText={setLogin}
            placeholder='Username'
            placeholderTextColor={COLORS.light_orange}
            style={styles.input}
          />
        </Animated.View>
        <Animated.View style={{ transform: [{ translateX: passwordTranslateX }] }}>
          <TextInput
            value={password}
            autoCapitalize='none'
            onChangeText={setPassword}
            placeholder='Password'
            placeholderTextColor={COLORS.light_orange}
            secureTextEntry
            style={styles.input}
          />
        </Animated.View>
        <Animated.View style={{ transform: [{ translateY: loginTranslateY }] }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={signInApp}
            style={styles.loginTouch}
          >
            <Text style={styles.loginLabel}>Sign In</Text>
          </TouchableOpacity>
        </Animated.View>

        <View style={styles.bottom}>
          <Text style={styles.question}>Have`nt signed up yet?</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
            onPress={signUp}
          >
            <Text style={styles.create}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default Login;
