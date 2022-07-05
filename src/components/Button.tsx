import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {IButtonProps} from "../interfaces/IButtonProps"

export function Button({ title, ...rest }: IButtonProps) {
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