import Section1 from '@/components/week3/Section1';
import Section2 from '@/components/week3/Section2';
import Section3 from '@/components/week3/Section3';
import React from 'react';
import { ScrollView, View } from 'react-native';

export default function Resort() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 20 }}>

                {/* <Text>Text of Resort </Text> */}
                <Section1 />
          
                
                               
            </View>
        </ScrollView>
    );
}
