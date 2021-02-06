import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
  FlatList,
} from "react-native";
import db from "../config";
import firebase from "firebase";
import MYHeader from "../components/MYHeader";
export default class ExchangeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: "",
      description: "",
      userName: firebase.auth().currentUser.email,
    };
  }
  addItem = async (itemName, description) => {
    var userName = this.state.userName;
    db.collection("exchange_requests").add({
      username: userName,
      item_Name: itemName,
      description: description,
    });
    this.setState({
      itemName: "",
      description: "",
    });
    return Alert.alert("Item ready to exchange", "", [
      {
        text: "Ok",
        onPress: () => {
          this.props.navigation.navigate("HomeScreen");
        },
      },
    ]);
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MYHeader title="Exchange" />
        <KeyboardAvoidingView style={styles.keyBoardStyle}>
          <TextInput
            style={styles.formTextInput}
            placeholder={"Enter Item Name..."}
            onChangeText={(text) => {
              this.setState({
                itemName: text,
              });
            }}
            value={this.state.itemName}
          />
          <TextInput
            style={[styles.formTextInput, { marginTop: 10, height: 300 }]}
            placeholder={"Why Do You Need The Item?"}
            multiline={true}
            numberOfLines={8}
            onChangeText={(text) => {
              this.setState({
                description: text,
              });
            }}
            value={this.state.description}
          />
          <TouchableOpacity
            style={[styles.button, { marginTop: 10 }]}
            onPress={() => {
              this.addItem(this.state.itemName, this.state.description);
            }}
          >
            <Text style={{ color: "#ffff", fontSize: 18, fontWeight: "bold" }}>
              Add Item
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  keyBoardStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formTextInput: {
    width: "75%",
    height: 35,
    alignSelf: "center",
    borderColor: "#59788e",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: "75%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#051094",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 20,
  },
});
