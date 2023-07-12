// Profile.js
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import avatars from "./assets/avatar.jpeg";

const Home = () => {
    // สมมติว่าข้อมูลนี้มาจากฐานข้อมูลหรือ API สำหรับผู้ใช้ที่ล็อกอิน
    const user = {
        username: 'username', // ชื่อผู้ใช้
        description: 'This is a user description', // คำอธิบายผู้ใช้
    }

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
        borderRadius: 50, // ทำให้ภาพเป็นวงกลม
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
