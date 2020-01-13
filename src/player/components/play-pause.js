import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const PlayPause = ({onPress, paused}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
      underlayColor="rgba(255,255,255,.3)"
      hitSlop={{
        left: 10,
        top: 10,
        bottom: 10,
        right: 10,
      }}>
      {paused ? (
        <Icon
          size={20}
          color="white"
          name={Platform.OS === 'ios' ? 'ios-play' : 'md-play'}
        />
      ) : (
        <Icon
          size={20}
          color="white"
          name={Platform.OS === 'ios' ? 'ios-pause' : 'md-pause'}
        />
      )}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 7,
    height: 25,
    marginRight: 8,
    marginVertical: 5,
    borderRadius: 4,
    borderColor: 'white',
  },
});

export default PlayPause;
