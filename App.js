import React, { Component } from 'react';
import Post from 'components/Post';
import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  },
  header: {
    height: 50,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textheader: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 16,
  },
  scroll: {
    padding: 20,
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Azure is better than AWS',
        author: 'Bill Gates',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque debitis consequatur ab ad suscipit ducimus voluptas, consectetur animi alias provident eos! Praesentium qui autem pariatur vitae consequuntur minus voluptatibus aspernatur! 1',
      },
      {
        id: 1,
        title: 'How to save money',
        author: 'Sergey Brin',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque debitis consequatur ab ad suscipit ducimus voluptas, consectetur animi alias provident eos! Praesentium qui autem pariatur vitae consequuntur minus voluptatibus aspernatur! 2',
      },
      {
        id: 2,
        title: 'Linux <3',
        author: 'Satya Nadella',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque debitis consequatur ab ad suscipit ducimus voluptas, consectetur animi alias provident eos! Praesentium qui autem pariatur vitae consequuntur minus voluptatibus aspernatur! 3',
      },
      {
        id: 4,
        title: 'Microsoft <3',
        author: 'Linus Torvalds',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque debitis consequatur ab ad suscipit ducimus voluptas, consectetur animi alias provident eos! Praesentium qui autem pariatur vitae consequuntur minus voluptatibus aspernatur! 4',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textheader}>
            GoNative App
          </Text>
        </View>
        <ScrollView contentContainerStyle={styles.scroll}>
          {posts.map(post => <Post key={post.id} data={post} />)}
        </ScrollView>
      </View>
    );
  }
}
