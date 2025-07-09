import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";



export default function Index() {
  return (
    <View style={styles.container}>

      <Link
        href="/flexbox/ex06"
        style={{
          marginTop: 24,
          padding: 12,
          backgroundColor: "#007AFF",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>ไปหน้าที่ 2</Text>
      </Link>




      <Link href="/test-components" style={styles.link}>
        <Text style={styles.linkText}>Test Components</Text>
      </Link>

      <Link href="/test-greeting" style={styles.link}>
        <Text style={styles.linkText}>Test Greeting</Text>
      </Link>
    </View>



  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", },
  link: { margin: 10, padding: 10, backgroundColor: "#2196F3", borderRadius: 5, },
  linkText: { color: "#fff", fontSize: 16, textAlign: "center", },
});
