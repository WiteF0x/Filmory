import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Root from '../screens/Root';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';

import Home from '../screens/main/Home';
import Announcements from '../screens/main/Announcements';
import AddAnnouncement from '../screens/main/Announcements/AddAnnouncement';
import Favourites from '../screens/main/Favourites';
import Viewed from '../screens/main/Viewed';
import Wishes from '../screens/main/Wishes';

const AppNavigator = createStackNavigator({
  Root: {
    screen: Root,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: true,
    },
  },

  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
  Announcements: {
    screen: Announcements,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
  Favourites: {
    screen: Favourites,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
  Viewed: {
    screen: Viewed,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
  Wishes: {
    screen: Wishes,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
  AddAnnouncement: {
    screen: AddAnnouncement,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: true,
    },
  },
}, {
    initialRouteName: 'Root',
});

export default createAppContainer(AppNavigator);
