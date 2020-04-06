import React from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import { ContextProvider } from 'react-simplified-context';
import Navigator from './Navigator';

export default class App extends React.Component {
  state = {
    articles : [],
    id : 1
  }

  componentWillMount() {
    AsyncStorage.getItem('@diary:state').then((state) => {
      this.setState(JSON.parse(state))
    });
  }

  save = () => {
    AsyncStorage.setItem('@diary:state', JSON.stringify(this.state));
  }

  render() {
    return (
      <ContextProvider
        articles={this.state.articles}
        create={(title, content) => {
          const now = new Date();

          this.setState({
            articles : [{
              id : this.state.id,
              title : title,
              content : content,
              bookmarked : false,
              date : `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate(0)}일`
            }].concat(this.state.articles),
            id : this.state.id + 1
          }, this.save)
        }}
        update={(id, title, content) => {
          let newArticles = [...this.state.articles];
          let index = newArticles.findIndex((a) => {
            return a.id === id
          });
          newArticles[index].title = title;
          newArticles[index].content = content;
          this.setState({
            articles : newArticles
          }, this.save);
        }}
        toggle={(id) => {
          let newArticles = [...this.state.articles];
          let index = newArticles.findIndex((a) => {
            return a.id === id
          });

          newArticles[index].bookmarked = !newArticles[index].bookmarked;
          this.setState({
            articles : newArticles
          }, this.save);
        }}
        remove={(id) => {

          console.log('remove function. id : ' + id);
          this.setState({
            articles : this.state.articles.filter((a) => {
              return a.id !== id
            }, this.save)
          });
        }}
      >
        <Navigator />
      </ContextProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
