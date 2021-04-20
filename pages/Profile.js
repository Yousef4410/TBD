import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Profile extends React.Component {
    render() {
        return (
            <View style ={styles.containter}>
                <Text> Profile Page</Text>

                <Button 
                    title="Back to marketpage"
                    onPress={() => 
                        this.props.navigation.navigate('Marketplace')
                    }
                />
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

export default Profile;
