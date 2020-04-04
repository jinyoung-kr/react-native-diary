import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { withContext } from 'react-simplified-context';
import Header from '../components/Header';
import ArticleItem from '../components/ArticleItem';

const ListScreen = ({
  articles
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="나의 글" />
      <FlatList
        data={articles}
        renderItem={({ item }) => {
          return <ArticleItem article={item} />
        }}
        keyExtractor={(item) => {
          return `${item.id}`
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
  }
});

export default withContext(ListScreen);
