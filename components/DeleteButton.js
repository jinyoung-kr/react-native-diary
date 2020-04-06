import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

const DeleteButton = ({onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.button}>
      <Text style={styles.text}>삭제</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width : 60,
    height : 60,
    backgroundColor : '#fe5746',
    justifyContent : 'center',
    alignItems : 'center'
  },
  text : {
    color : '#ffffff'
  }
});

export default DeleteButton;
