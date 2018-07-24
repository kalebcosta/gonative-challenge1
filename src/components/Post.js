import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  post: {
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginBottom: 20,
  },
  title: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
  author: {
    color: '#999',
    fontSize: 12,
  },
  postheader: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#EEE',
    paddingBottom: 10,
  },
  content: {
    paddingTop: 10,
  },
  textcontent: {
    color: '#666',
  },
});

const Post = (props) => {
  const { title, author, content } = props.data;

  return (
    <View style={styles.post}>
      <View style={styles.postheader}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.author}>
          {author}
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.textcontent}>
          {content}
        </Text>
      </View>
    </View>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
