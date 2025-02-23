import { styles } from "@/styles/_homestyle";
import { View, Text, ScrollView } from "react-native";

const Inbox = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold", padding: 16 }}>
        Inbox
      </Text>
      <ScrollView style={styles.listingContainer}>
        <Text style={{ padding: 16, textAlign: "center" }}>
          Your messages will appear here.
        </Text>
      </ScrollView>
    </View>
  );
};

export default Inbox;