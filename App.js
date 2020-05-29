import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    count: 0
  }

  componentDidMount() {
    let count = 0;
    for (let i = 99; i < 300; i++) {
      let isSimple = true;
      let d = i - 1;
      while (d > 1) {
        if ((i % d) == 0) {
          isSimple = false;
          break;
        }
        d--;
      }
      if (isSimple) count++;
    }
    this.setState({ count });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Количество простых чисел</Text>
        <Text style={styles.title}>в диапазоне от 99 до 300:</Text>
        <Text style={styles.answer}>{this.state.count}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#48758c',
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    color: "#c4c8ca",
  },
  answer: {
    fontSize: 25,
    color: "#ffa801",
  }
});
