import React from 'react';
import { View, ScrollView, ListView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

class ListViewDemo extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['Darrens Music', 'Prabhaths Music', 'Gautums Music', 'Katies Music', 'Harshs Music']),
    };
  }
  render() {
    return (

      <ScrollView style={styles.container}>
        <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <View style={{height: 200, backgroundColor: 'steelblue'}}><Text>{data}</Text></View>}/>
        
        <View style={{height: 200, backgroundColor: 'white'}} />
      </ScrollView>

    );
  }
}
///////


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'stretch',
//   },
// });

export default ListViewDemo;

