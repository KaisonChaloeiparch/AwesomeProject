import React from "react";
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from "react-native";

const events = [
  { id: "1", title: "Truckfighters: Performing", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-1.jpg", month: "DEC", date: "30", datetime: "Thu, DEC 30, 09.00 am", place: "London" },
  { id: "2", title: "Paris Motor Show", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-2.jpg", month: "DEC", date: "31", datetime: "Thu, DEC 30, 09.00 am", place: "Paris" },
  { id: "3", title: "Bearded Theory Spring", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-3.jpg", month: "JAN", date: "01", datetime: "Thu, JAN 01, 09.00 am", place: "Canada" },
  { id: "4", title: "BBC Music Introducing", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-4.jpg", month: "JAN", date: "11", datetime: "Thu, JAN 11, 09.00 am", place: "USA" },
  { id: "5", title: "Start-Up Meeting 2022", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg", month: "JAN", date: "21", datetime: "Thu, JAN 21, 09.00 am", place: "Thailand" }
];

const CARD_WIDTH = Dimensions.get("window").width * 0.55; // 70% ของหน้าจอ
const IMAGE_HEIGHT = CARD_WIDTH * 0.56; // อัตราส่วน 16:9

export default function EventList() {
  return (
    <FlatList
      data={events}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingHorizontal: 12 }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          {/* รูปภาพ */}
          <Image
            source={{ uri: item.uri }}
            style={styles.image}
          />

          {/* กล่องข้อมูลด้านล่าง */}
          <View style={styles.bottomBox}>
            {/* ด้านซ้าย */}
            <View style={styles.leftBox}>
              <Text style={styles.dateText}>{item.date}</Text>
              <Text style={styles.monthText}>{item.month}</Text>
            </View>

            {/* ด้านขวา */}
            <View style={styles.rightBox}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.time}>{item.datetime}</Text>
              <Text style={styles.place}>{item.place}</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    marginRight: 14,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    overflow: "hidden",
    width: CARD_WIDTH
  },
  image: {
    width: "100%",
    height: IMAGE_HEIGHT,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  bottomBox: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#eee"
  },
  leftBox: {
    paddingVertical: 6,  // ลดจากเดิม
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f8"
  },
  dateText: {
    fontSize: 16, // ลดจาก 20
    fontWeight: "bold",
    color: "#000",
    textAlign: "center"
  },
  monthText: {
    fontSize: 12, // ลดจาก 14
    color: "#555",
    textAlign: "center"
  },
  rightBox: {
    flex: 1,
    paddingVertical: 6, // ลดจาก 10
    paddingHorizontal: 8,
    justifyContent: "center"
  },
  title: {
    fontSize: 14, // ลดจาก 16
    color: "#000",
    fontWeight: "600"
  },
  time: {
    color: "#666",
    fontSize: 12 // ลดลง
  },
  place: {
    color: "#666",
    fontSize: 12 // ลดลง
  }
});

