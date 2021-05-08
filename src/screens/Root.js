import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

import COLORS from '../constants/colors';
import * as actions from '../redux/actions';

const Root = ({ testAuth }) => {
  useEffect(() => {
    testAuth()
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black, paddingBottom: '5%', alignItems: 'center', justifyContent: 'flex-end' }}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => testAuth()}
      >
        <Text style={{ fontSize: 16, color: COLORS.orange }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  testAuth: () => dispatch(actions.testAuthAction()),
})

export default connect(null, mapDispatchToProps)(Root);
