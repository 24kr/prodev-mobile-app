import { styles } from "@/styles/_homestyle";
import { View, Text, ScrollView } from "react-native";

const Saved = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold", padding: 16 }}>
        Saved Items
      </Text>
      <ScrollView style={styles.listingContainer}>
        <Text style={{ padding: 16, textAlign: "center" }}>
          Your saved items will appear here.
        </Text>
      </ScrollView>
    </View>
  );
};

export default Saved;