import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Section2() {
    return (
        <View style={styles.container}>
            {/* กรอบพื้นหลังสีเทา */}
            <View style={styles.grayBox}>
                <Text style={styles.title}>Hilton San Francisco</Text>

                <View style={styles.row}>
                    {/* แสดงไอคอนดาว 5 ดวง */}
                    {[...Array(5)].map((_, index) => (
                        <FontAwesome
                            key={index}
                            name="star"
                            size={20}
                            color="#FFD700"
                            style={{
                                marginRight: 10

                            }}
                        />
                    ))}
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
        marginTop: 30,
        padding: 20,
    },
    grayBox: {
        backgroundColor: '#eee',      // สีพื้นหลังเทา
        padding: 20,                  // เว้นขอบด้านใน
        borderRadius: 10,            // มุมโค้ง
        shadowColor: '#000',         // เงา (iOS)
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,                // เงา (Android)
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    description: {
        textAlign: 'center',
        fontSize: 16,
        color: '#333',
    },

    
});
