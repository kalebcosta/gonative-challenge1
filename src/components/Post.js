import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const Post = props => (
  <View style={styles.post}>
    <View style={styles.postheader}>
      <Text style={styles.title}>{props.data.title}</Text>
      <Text style={styles.author}>{props.data.author}</Text>
    </View>
    <View style={styles.content}>
      <Text style={styles.textcontent}>{props.data.content}</Text>
    </View>
  </View>
);

// let width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  post: {
    padding: 20,
    backgroundColor: "#FFF",
    // height: 120,
    borderRadius: 5,
    marginBottom: 20
  },
  title: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 16
  },
  author: {
    color: "#999",
    fontSize: 12
  },
  postheader: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#EEE",
    paddingBottom: 10
  },
  content: {
    paddingTop: 10
  },
  textcontent: {
    color: "#666"
  }
});

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
