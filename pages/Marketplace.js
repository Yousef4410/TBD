import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Marketplace extends React.Component {
    render() {
        return (
            <View style ={styles.containter}>
                <Text> Flynn dis all you (aka market page)</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#334b68",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 20,
      textAlign: "center",
      marginTop: 40
    }
  });

export default Marketplace;
