import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Replace this with your actual login logic
        console.log('Username:', username);
        console.log('Password:', password);
        // Handle successful or failed login (e.g., navigate to a different screen)
    };

    return (
        <View style={styles.container}>
            <Text style={styles.message}>Login</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Username"
                    autoCapitalize="none" // Prevent automatic capitalization
                    textContentType="username" // Set keyboard type for username
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"
                    secureTextEntry={true} // Hide password characters
                />
                <Button title="Login" onPress={handleLogin} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Take all available space
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
    },
    message: {
        fontSize: 20,
        marginBottom: 20,
    },
    form: {
        width: '80%',
    },
    input: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
});

export default LoginComponent;
