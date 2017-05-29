import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class Lecture extends Component{
  constructor(props) {
    super(props);
  }
  render() {
     return (
        <View style={styles.container}>

            <Text onPress={ () => this.props.navigation.openDrawer()}>Lecture</Text>
        </View>
     )
  }
}

const styles = StyleSheet.create({
  container : {
     flex: 1,
     paddingTop : 30
  }
})