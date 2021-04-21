import React from "react";
import { Modal, View, Button, StyleSheet, Text } from "react-native";
import Color from "../constants/colors";

const ContactInfoPopup = (props) => {
  return (
    <Modal visible={props.visibility} animationType="none">
      <View style={styles.contactInfoContainer}>
        <View style={styles.contactInfo}>
          <Text style={styles.contactInfoText}>{props.contactInfo}</Text>
        </View>
        <View style={styles.returnButton}>
          <Button title="Ok" onPress={props.onCancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contactInfoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.cardColor,
  },
  contactInfo: {
    marginVertical: 15,
  },
  returnButton: {
    width: "30%",
  },
  contactInfoText: {
    fontSize: 20,
  },
});

export default ContactInfoPopup;
