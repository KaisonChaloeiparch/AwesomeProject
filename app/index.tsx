import FlexboxMenu from "@/components/FlexboxMenu";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";



export default function Index() {
  return (

    <ScrollView>
      <View style={styles.container}>

        <Link href="/book" style={styles.link}>
          <Text style={styles.linkText}>Book</Text>
        </Link>

        <Link href="/book-online" style={styles.link}>
          <Text style={styles.linkText}>Book Online</Text>
        </Link>


        <Link href="/location" style={styles.link}>
          <Text style={styles.linkText}>Location</Text>
        </Link>


        <Link href="/todolist" style={styles.link}>
          <Text style={styles.linkText}>Todo List</Text>
        </Link>


        <Link href="/your-health" style={styles.link}>
          <Text style={styles.linkText}>Your Health</Text>
        </Link>

        <Link href="/chart" style={styles.link}>
          <Text style={styles.linkText}>Chart</Text>
        </Link>


        <Link href="/home" style={styles.link}>
          <Text style={styles.linkText}>Home</Text>
        </Link>


        <Link href="/flatlistexample" style={styles.link}>
          <Text style={styles.linkText}>Flatlist Example</Text>
        </Link>


        <Link href="/health" style={styles.link}>
          <Text style={styles.linkText}>Health</Text>
        </Link>


        <Link href="/travel" style={styles.link}>
          <Text style={styles.linkText}>Travel</Text>
        </Link>

        <Link href="/resort" style={styles.link}>
          <Text style={styles.linkText}>Resort</Text>
        </Link>

        <Link href="/review" style={styles.link}>
          <Text style={styles.linkText}>Review</Text>
        </Link>


        <Link
          href="/flexbox/ex12"
          style={{
            marginTop: 24,
            padding: 12,
            backgroundColor: "#007AFF",
            borderRadius: 8,
          }}
        >

          <Text style={{ color: "#fff", fontWeight: "bold" }}>เด้งไปหน้าที่ 2 Test</Text>
        </Link>


        <Link href="/test-components" style={styles.link}>
          <Text style={styles.linkText}>Test Components</Text>
        </Link>


        <Text>Flexbox Menu</Text>
        <FlexboxMenu />


        <Link href="/test-greeting" style={styles.link}>
          <Text style={styles.linkText}>Test Greeting</Text>
        </Link>
      </View>

    </ScrollView>



  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", },
  link: { margin: 10, padding: 10, backgroundColor: "#2196F3", borderRadius: 5, },
  linkText: { color: "#fff", fontSize: 16, textAlign: "center", },
});
