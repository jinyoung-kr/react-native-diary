import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';


const ViewHeader = ({
  navigation,
  title,
  bookmarked,
  bookmark,
  remove
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
      <Text style={styles.title}>
        {title}
      </Text>
      <View style={styles.buttonBox}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={bookmark}
          hitSlop={{ top : 32, bottom : 32, left : 32, right : 32 }}
          style={styles.heart}
        >
          <Ionicons name={bookmarked ? "md-heart" : "md-heart-empty"} size={24} color="#DA5746" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            remove();
            console.log("1212121212");
            navigation.goBack();
          }}
          hitSlop={{ top : 32, bottom : 32, left : 32, right : 32 }}
          style={styles.trash}
        >
          <Ionicons name="ios-trash" size={24} color="#DA5746" />
        </TouchableOpacity>
      </View>
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
  title : {
    fontSize : 18,
    fontWeight : '600',
    color : '#212121',
  },
  buttonBox : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
    width : 45,
    height : 28,
    padding : 0,
    margin : 0
  }
});

export default withNavigation(ViewHeader);
