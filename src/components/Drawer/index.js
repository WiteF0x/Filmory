import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import COLORS from '../../constants/colors';
import * as actions from '../../redux/actions';

import styles from './styles';

const Drawer = ({ user, logOut, current, navigation }) => {

  const goTo = (screen) => {
    screen !== current && navigation.replace(screen);
  };

  const renderMenuItems = () => (
    <View style={styles.menuItemsContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={current === 'Home'}
        hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
        onPress={() => goTo('Home')}
        style={[styles.item, { opacity: current === 'Home' ? 0.6 : 1 }]}
      >
        <Text style={styles.menuItemLabel}>Recommended</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        disabled={current === 'Favourites'}
        hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
        onPress={() => goTo('Favourites')}
        style={[styles.item, { opacity: current === 'Favourites' ? 0.6 : 1 }]}
      >
        <Text style={styles.menuItemLabel}>Favourites</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        disabled={current === 'Viewed'}
        hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
        onPress={() => goTo('Viewed')}
        style={[styles.item, { opacity: current === 'Viewed' ? 0.6 : 1 }]}
      >
        <Text style={styles.menuItemLabel}>Viewed</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        disabled={current === 'Announcements'}
        hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
        onPress={() => goTo('Announcements')}
        style={[styles.item, { opacity: current === 'Announcements' ? 0.6 : 1 }]}
      >
        <Text style={styles.menuItemLabel}>Announcements</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        disabled={current === 'Wishes'}
        hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
        onPress={() => goTo('Wishes')}
        style={[styles.item, { opacity: current === 'Wishes' ? 0.6 : 1 }]}
      >
        <Text style={styles.menuItemLabel}>Wishes</Text>
      </TouchableOpacity>

    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Icon name='person-circle-outline' size={45} color={COLORS.black}/>
        <Text style={styles.displayName}>{ user?.displayName || '' }</Text>
      </View>

      { renderMenuItems() }

      <View style={styles.bottom}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => logOut()}
          style={styles.logOutTouch}
        >
          <View style={styles.logoutIcon}>
            <Icon name='log-out-outline' size={35} color={COLORS.black}/>
          </View>
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(actions.logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
