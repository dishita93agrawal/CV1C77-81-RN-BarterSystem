import React from "react";
import firebase from "firebase";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { DrawerItems } from "react-navigation-drawer";
export default class CustomSidebarMenu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.drawerItemContainer}>
          <DrawerItems {...this.props} />
        </View>
        <View style={styles.logOutContainer}>
          <TouchableOpacity
            style={styles.logOutButton}
            onPress={() => {
              firebase.auth().signOut();
              this.props.navigation.navigate("SignUpLoginScreen");
            }}
          >
            <Text style={styles.logOutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerItemsContainer: {
    flex: 0.8,
  },
  logOutContainer: {
    flex: 0.2,
    justifyContent: "flex-end",
  },
  logOutButton: {
    height: 30,
    width: "100%",
    justifyContent: "center",
  },
  logOutText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10
  },
});
