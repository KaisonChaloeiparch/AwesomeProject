import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section1() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('th-TH', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }) + ' น.';

    return (
        <View style={{ padding: 5 }}>
            {/* พื้นหลังสีส้มด้านบน */}
            <View style={{ height: 20, backgroundColor: 'orange', justifyContent: 'center' }}>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 16,
                    paddingLeft: 10,
                }}>
                    {/* หัวข้อหรือแถบบน */}
                </Text>
            </View>

            {/* รูปภาพพร้อมเวลา */}
            <View style={{ flexDirection: "row", position: 'relative' }}>
                <Image
                    style={{
                        flex: 1,
                        resizeMode: "cover",
                        aspectRatio: 14 / 6,
                        borderRadius: 10
                    }}
                    source={require("@/assets/week3/room-6.jpg")}
                />
                <Text style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 5,
                    fontSize: 12,
                }}>
                    {timeString}
                </Text>
            </View>
        </View>
    );
}
