import React from 'react';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import COLORS from '../../../constants/colors';
import styles from './styles';

const SignUp = (props) => {
  const {
    username,
    displayName,
    password,
    confirm,

    setUsername,
    setDisplayName,
    setPassword,
    setConfirm,

    goBack,
    onSignUp,
  } = props;

  const line = <View style={styles.line}/>

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
          onPress={goBack}
        >
          <Icon name='chevron-back-outline' size={40} color={COLORS.orange}/>
        </TouchableOpacity>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={{ flex: 1 }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps='always'
        keyboardDismissMode='on-drag'
      >
        <View style={styles.content}>
          <Icon name='color-filter-outline' size={75} color={COLORS.orange}/>
          <Text style={styles.title}>Create your account</Text>
          { line }
          <TextInput
            value={username}
            autoCapitalize='none'
            placeholder='Create your username'
            placeholderTextColor={COLORS.light_orange}
            onChangeText={setUsername}
            style={styles.input}
          />
          <TextInput
            value={displayName}
            autoCapitalize='none'
            placeholder='Create your display name'
            placeholderTextColor={COLORS.light_orange}
            onChangeText={setDisplayName}
            style={styles.input}
          />
          <TextInput
            value={password}
            autoCapitalize='none'
            placeholder='Password'
            placeholderTextColor={COLORS.light_orange}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <TextInput
            value={confirm}
            autoCapitalize='none'
            placeholder='Confirm password'
            placeholderTextColor={COLORS.light_orange}
            onChangeText={setConfirm}
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onSignUp}
            style={styles.signUp}
          >
            <Text style={styles.signUpLabel}>Create account</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
