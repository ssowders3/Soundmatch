import React from 'react';
import { View, ScrollView, ListView, StyleSheet, Text } from 'react-native';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        const posts = () => {
            return '';
        };
        const usernames = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: usernames.cloneWithRows(['Darren\'s Music', 'Prabhath\'s Music', 'Gautum\'s Music', 'Katie\'s Music', 'Harsh\'s Music']),
            items: posts || ''
        };
        
        const timestamp = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: timestamp.cloneWithRows(['10:12AM', '10:13AM', '10:14AM', '10:15AM', '10:16AM']),
        };
    }

    render() {
        let items = this.state.items;
        console.log(items);
        return (
            <ScrollView style = {styles.container}>
                <ListView
                    style = {styles.container}
                    dataSource = {this.state.dataSource}
                    renderRow = {(data) => <View style={styles.view}><Text style={styles.text}>{data}</Text></View>}/>
            </ScrollView>
        );
    }



  componentDidMount() {
      fetch(`https://sound-match.herokuapp.com/getposts/kevin`)
          .then(result=>result.json())
          .then(entries=> {
              let username = entries.username;
              console.log(username);
              console.log(entries);
              this.setState({items: this.state.items + entries});
          })
  }
}

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
      fontFamily: 'Arial',
      padding: 10,
  },
});