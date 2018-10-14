import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(props){
      super(props);
      this.state = {items: ''};

  }

  render() {
    let items = this.state.items;
    console.log(items.posts);
    return (
      <View style={styles.container}>
        <Text>{items}</Text>
      </View>
    );
  }

  componentDidMount() {
      fetch(`https://sound-match.herokuapp.com/getposts/kevin`)
          .then(result=>result.json())
          .then(posts=>this.setState({items}))
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
