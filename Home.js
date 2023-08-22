import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import avatars from "./assets/avatar.jpeg";
import firebase from './firebaseConfig';

const Home = ({ navigation }) => { 
    const user = {
        username: 'username', 
        description: 'This is a user description',
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                navigation.navigate('Login');
            }
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image 
                style={styles.profileImage}
                source={avatars}
            />
            <Text style={styles.username}>{user.username}</Text>
            <Text style={styles.description}>{user.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50, 
        marginBottom: 10,
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Home;

