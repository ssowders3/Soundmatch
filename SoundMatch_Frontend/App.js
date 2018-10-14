import React from 'react';
import { View, ScrollView, ListView, StyleSheet, Text, Image} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    const usernames = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: usernames.cloneWithRows(['Darren\'s Music', 'Prabhath\'s Music', 'Gautum\'s Music', 'Katie\'s Music', 'Harsh\'s Music']),
        items: ''
    };
  }
  render() {
      return (

          <ScrollView style = {styles.container}>
              <ListView
                  style = {styles.container}
                  dataSource = {this.state.dataSource}
                  renderRow = {(data) => <View style={styles.view}><Image
                      style={styles.image}
                      source={{uri: 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'}}/>
                      <Text style={styles.text}>{data}</Text></View>}/>
          </ScrollView>

      );
  }
  componentDidMount(){
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
        flexDirection: 'row',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        fontSize: 20,
        padding: 10,
    },
    image: {
        width: 40,
        height: 40,
        alignSelf: 'flex-start',
        margin: 10,
    }
});

export default App;
