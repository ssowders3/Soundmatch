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
        renderRow={(data) => <View style={styles.container}><Text>{data}</Text></View>}/>
      </ScrollView>

    );
  }
}


const styles = StyleSheet.create({
  container: {
      height: 200,
      borderWidth: 0.5,
      backgroundColor: 'steelblue'
      alignItems: 'center'
  }
});

export default ListViewDemo;
