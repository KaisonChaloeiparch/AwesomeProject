import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


export default function TestComponent() {
    return (
        <ScrollView style={{ margin: 20 }} >

            <TextInput
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={30}
                multiline={false}
                placeholder="Please enter your email"
                returnKeyType="next"
                onChangeText={(text) => { }}
                defaultValue="Default text"
            />
            <Button
                title="Press me"
                onPress={() => Alert.alert("Simple Button pressed")}
                color="#665544"
            />

            <Text> Hello World </Text>

            <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width: 50, height: 50 }} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
                <Image style={{ width: 100, height: 50 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                <Image style={{ width: 100, height: 100, borderRadius: 100 / 2 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 3 / 2 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 4 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20, backgroundColor: 'gray' }}>
                <Image style={{ flex: 1, resizeMode: 'contain', aspectRatio: 16 / 4 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
            </View>

            <FontAwesome name="heart"  size={32} color="orange" />



            style={SceneStyleInterpolators.container}

            <Link href="/test-components" style={styles.link}>
                <Text style={styles.linkText}>Test Components</Text>
            </Link>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", },
    link: { margin: 10, padding: 10, backgroundColor: "#2196F3", borderRadius: 5, },
    linkText: { color: "#fff", fontSize: 16, textAlign: "center", },
});
