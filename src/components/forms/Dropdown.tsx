import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface DropdownProps<T extends string> {
    label: string;
    options: T[];
    selected: T;
    onSelect: (value: T) => void;
}

export function Dropdown<T extends string>({
    label,
    options,
    selected,
    onSelect,
}: DropdownProps<T>) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (value: T) => {
        onSelect(value);
        setIsOpen(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity
                style={styles.header}
                onPress={() => setIsOpen(!isOpen)}
            >
                <Text style={styles.headerText}>{selected}</Text>
                <AntDesign
                    name={isOpen ? "up" : "down"}
                    size={24}
                    color="black"
                />
            </TouchableOpacity>
            {isOpen && (
                <View style={styles.list}>
                    {options.map((option) => (
                        <TouchableOpacity
                            key={option}
                            style={styles.item}
                            onPress={() => handleSelect(option)}
                        >
                            <Text style={styles.itemText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        fontWeight: "500",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
    },
    headerText: {
        fontSize: 16,
        color: "#333",
    },
    list: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        marginTop: 4,
    },
    item: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    itemText: {
        fontSize: 16,
        color: "#333",
    },
});
