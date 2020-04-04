import React from 'react';
import { Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView, withNavigation } from 'react-navigation';
import { withContext } from 'react-simplified-context';
import ViewHeader from '../components/ViewHeader'

const ViewScreen = ({
  navigation,
  articles,
  toggle
}) => {
  let id = navigation.getParam('id', -1);
  let article = articles.find((a) => {
    return a.id === id
  });

  return (
    <SafeAreaView style={styles.container}>
      <ViewHeader
        title={article.title}
        bookmarked={article.bookmarked}
        bookmark={() => {
          toggle(id)
        }} />
      <ScrollView>
        <TouchableOpacity
          activeOpacity={0.8}
          onLongPress={() => {
            navigation.navigate('Edit', {id : id})
          }}
        >
          <Text style={styles.content}>
            {article.content}
          </Text>
          <Text style={styles.date}>
            {article.date}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1
  },
  content : {
    fontSize : 16,
    padding : 20,
    lineHeight : 20,
    color : '#424242'
  },
  date : {
    fontSize : 14,
    padding : 20,
    paddingTop : 0,
    color : '#BDBDBD'
  }
});

export default withNavigation(withContext(ViewScreen));
