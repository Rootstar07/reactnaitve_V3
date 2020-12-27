import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class StoryText extends Component {
  render() {
    return (
      <View>
        <Text style={styles.titlestyle}>{this.props.title}</Text>
        <Text style={styles.storystyle}>{this.props.text}</Text>
      </View>
    );
  }
}

class Toc extends Component {
  render() {
    var list = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      i++;
    }
    return <Text>{i}</Text>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "제목", text: "난 rootstar라고 해" },
      contents: [
        {
          id: 1,
          desc: "다가간다.",
        },
        {
          id: 2,
          desc: "다가간다.",
        },
        {
          id: 3,
          desc: "다가간다.",
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StoryText
          title={this.state.subject.title}
          text={this.state.subject.text}
        ></StoryText>
        <Toc data={this.state.contents}></Toc>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titlestyle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  storystyle: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const TextNodes = [
  {
    title: "Cien años de soledad",
    id: 0,
    text:
      "몇 년이 지나 총살을 당하게 된 순간, 아우렐리아노 부엔디아 대령은 오래전 어느 오후 아버지에게 이끌려 얼음 구경을 하러 간 일을 떠올렸다",
    options: [
      {
        buttonID: 1,
        text: "다가간다.",
        setState: { blueGoo: true },
        nextID: 1,
      },
      {
        buttonID: 2,
        text: "무기를 꺼낸다.",
        setState: { blueGoo: false },
        nextID: 3,
      },
      {
        buttonID: 3,
        text: "상황을 지켜본다.",
        setState: { blueGoo: false },
        nextID: 3,
      },
    ],
  },
  {
    title: "Cien años de soledad",
    id: 0,
    text:
      "몇 년이 지나 총살을 당하게 된 순간, 아우렐리아노 부엔디아 대령은 오래전 어느 오후 아버지에게 이끌려 얼음 구경을 하러 간 일을 떠올렸다",
    options: [
      {
        text: "111111",
        setState: { blueGoo: true },
        nextID: 2,
      },

      {
        text: "222222",
        setState: { blueGoo: false },
        nextID: 3,
      },
      {
        text: "3333333",
        setState: { blueGoo: false },
        nextID: 3,
      },
    ],
  },
];

export default App;
