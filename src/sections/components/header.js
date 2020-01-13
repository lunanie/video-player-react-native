import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';

const Header = ({children}) => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={styles.container}>
          <View style={styles.right}>{children}</View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Header;
