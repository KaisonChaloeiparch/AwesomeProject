import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Section2() {
    return (
        <View style={styles.container}>

            <View style={{ backgroundColor: "red" }}>

            </View>

            <View style={{ backgroundColor: "red", marginTop: -50 }}>

            </View>
            <View style={styles.grayBox}>
                <Text style={styles.title}>Hilton San Francisco</Text>
                <View style={styles.row}>
                    {[...Array(4)].map((_, index) => (
                        <FontAwesome
                            key={index}
                            name="star"
                            size={20}
                            color="#FFD700"
                            style={{ marginRight: 5 }}
                        />
                    ))}
                    <FontAwesome
                        name="star-half-full" // หรือ "star-half"
                        size={20}
                        color="#FFD700"
                    />
                </View>

                <Text style={styles.description}>
                    Facilities provided may range from a modest quality mattress in a small room to large suites
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -25,
        padding: 20,
        backgroundColor: '#fff',
    },
    grayBox: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5,
    },
    description: {
        textAlign: 'center',
        fontSize: 11,
        color: '#333',
    },
});
