import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Alert, Button, Image, ScrollView, Text, TextInput, View } from 'react-native';


export default function TestComponent() {
  return (
    <ScrollView  style={{ margin : 20 }} >

        <TextInput
  keyboardType="email-address"
  autoCapitalize="none"
  autoCorrect={false}
  maxLength={30}
  multiline={false}
  placeholder="Please enter your email"
  returnKeyType="next"
  onChangeText={(text)=>{}}
  defaultValue="Default text"
/>

<Button
  title="Press me now!!!!"
  onPress={() => Alert.alert("Simple Button pressed")}
  color="#665544"
/>

<Text> Hello World Kaison Chaloeiprach </Text>

<Image source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width:100, height:100 }} />

<View style={{ flexDirection: 'column' }}>
    {/* Fixed Size */}
    <View style={{ flexDirection: 'row' , justifyContent : 'space-between' , marginTop : 50}}>
        <Image style={{ width: 100, height: 100 }} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} />
        <Image style={{ width: 100, height: 100}} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} />
        <Image style={{ width: 100, height: 100, borderRadius: 100/2 }} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} />
    </View>    
</View>

<View style={{ flexDirection: 'column' }}>
    
    <View style={{ flexDirection: 'row' , marginTop : 20 }}>
        <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 3 / 2 }} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} />
    </View>

    <View style={{ flexDirection: 'row' , marginTop : 20 }}>
        <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 4 }} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} />
    </View>

    <View style={{ flexDirection: 'row' , marginTop : 20, backgroundColor : 'gray' }}>
        <Image style={{ flex: 1, resizeMode: 'contain', aspectRatio: 16 / 4 }} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} />
    </View>

</View>

<View style={{ height: 50, width: 50, borderRadius: 50/2, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 30, color : "white" }}>หัวใจ</Text>
</View>
<FontAwesome name="heart"  size={50} color="orange" />
import { <FontAwesome></FontAwesome> } from '@expo/vector-icons';

<ScrollView>
    <View style={{ flex: 1, flexDirection: 'column' }}>
        ...               
    </View>
</ScrollView>










    </ScrollView>
  );
}
