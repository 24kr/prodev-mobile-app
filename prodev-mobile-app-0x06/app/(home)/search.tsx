import { styles } from "@/styles/_homestyle";
import { Feather } from "@expo/vector-icons";
import { View, Text, TextInput, ScrollView } from "react-native";

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchGroup}>
        <View style={styles.searchFormGroup}>
          <View style={styles.searchControlGroup}>
            <Text style={styles.searchFormText}>Search</Text>
            <TextInput
              style={{ ...styles.searchControl, ...styles.searchFormText }}
              placeholder="Enter your search term"
            />
          </View>
          <View style={styles.searchButton}>
            <Feather name="search" size={24} color="white" />
          </View>
        </View>
      </View>

      <ScrollView style={styles.listingContainer}>
        <Text style={{ padding: 16, textAlign: "center" }}>
          Search results will appear here.
        </Text>
      </ScrollView>
    </View>
  );
};

export default Search;