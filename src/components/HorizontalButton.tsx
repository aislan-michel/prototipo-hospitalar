import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {IHorizontalButtonProps} from "../interfaces/IHorizontalButtonProps"

export function HorizontalButton({ title, ...rest }: IHorizontalButtonProps) {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.6} {...rest}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    margin: "5%",
    backgroundColor: '#fff',
    padding: "5%"
  },
  text: {
    fontSize: 25
  }
});