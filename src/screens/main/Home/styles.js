import { StyleSheet } from 'react-native';

import COLORS from '../../../constants/colors';

const styles = StyleSheet.create({
  burder: {
    position: 'absolute',
    top: '5%',
    left: '5%',
    zIndex: 999,
    borderRadius: 10,
    backgroundColor: COLORS.black,
    padding: 7,
  },
  burderTouch: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: COLORS.orange,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  posterImage: {
    width: '100%',
    // height: ITEM_SIZE * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});

export default styles;
