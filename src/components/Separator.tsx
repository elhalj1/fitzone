import { StyleSheet, View } from "react-native";

const Separator = () => {
    return <View style={styles.line} />;
};

const styles = StyleSheet.create({
    line: {
        width: 180,
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        marginVertical: 10,
        marginHorizontal: 5,
    },
});

export default Separator;
