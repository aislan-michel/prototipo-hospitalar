import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {IRoundedButtonProps} from "../interfaces/IRoundedButtonProps"

export function RoundedButton({ title, ...rest }: IRoundedButtonProps) {
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
    position: 'absolute',
    top: '80%'
  },
  text: {
    backgroundColor: '#396B6D',
    padding: 15,
    borderRadius: 50,
    color: '#fff'        
  }
});