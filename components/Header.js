import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    marginTop : 48,
    height : 52,
    borderBottomWidth : 0.3,
    borderBottomColor : '#bdbdbd'
  },
  header : {
    paddingLeft : 16,
    paddingRight : 16,
    color : '#212121',
    fontSize : 32,
    fontWeight : '600'
  }
});

export default Header;
