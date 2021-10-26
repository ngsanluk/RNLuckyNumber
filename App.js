/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {


  state = {
    luckyNumber: 0
  }

  play = () => {
    var luckyNumber = Math.floor((Math.random() * 100) + 1);
    this.setState({
      luckyNumber: luckyNumber
    })
  }

  render() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Text
              style={{
                color: "#333333",
                fontSize: 20,
                paddingTop: 100,
                paddingBottom: 20
              }}>
              Lucky Number
            </Text>
            <Text
              style={{
                color: "#CC0000",
                fontSize: 200,
                paddingTop: 100,
                paddingBottom: 100
              }}>
              {this.state.luckyNumber==0 ? '?' : this.state.luckyNumber}
            </Text>
          </View>
          <Button
            title="PLAY"
            onPress={this.play}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
