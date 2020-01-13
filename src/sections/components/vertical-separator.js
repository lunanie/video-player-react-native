import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function VerticalSeparator({color = '#eaeaea'}) {
  return (
    <View
      style={[
        styles.separator,
        {
          borderTopColor: color,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
  },
  text: {
    fontSize: 16,
  },
});

export default VerticalSeparator;
