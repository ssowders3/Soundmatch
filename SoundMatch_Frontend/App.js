import React from 'react';
import { View, ScrollView, ListView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 11.5,
  },
  view: {
      height: 200,
      borderWidth: 1,
      backgroundColor: '#ABB2BF',
      alignItems: 'center',
      borderColor: 'white',
  },
  text: {
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
      padding: 10,
  },
});

class ListViewDemo extends React.Component {
  constructor(props) {
    super(props);
    const usernames = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: usernames.cloneWithRows(['Darren\'s Music', 'Prabhath\'s Music', 'Gautum\'s Music', 'Katie\'s Music', 'Harsh\'s Music']),
    };
    const timestamp = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: timestamp.cloneWithRows(['10:12AM', '10:13AM', '10:14AM', '10:15AM', '10:16AM']),
    };
  }
  render() {
    return (

      <ScrollView style = {styles.container}>
          <ListView
          style = {styles.container}
          dataSource = {this.state.dataSource}
          renderRow = {(data) => <View style={styles.view}><Text style={styles.text}>{data}</Text></View>}/>
      </ScrollView>

    );
  }
}

export default ListViewDemo;
