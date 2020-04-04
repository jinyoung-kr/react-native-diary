import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';


const EditHeader = ({
  navigation,
  done
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.goBack()
        }}
        hitSlop={{ top : 32, bottom : 32, left : 32, right : 32 }}
      >
        <Ionicons name="ios-arrow-back" size={28} color="#DA5746" />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          done();
          navigation.goBack();
        }}
      >
        <Text style={styles.done}>
          완료
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flexDirection : 'row',
    height : 48,
    alignItems : 'center',
    justifyContent : 'space-between',
    paddingLeft : 16,
    paddingRight : 16
  },
  done : {
    fontSize : 16,
    color : '#DA5746',
  }
});

export default withNavigation(EditHeader);
