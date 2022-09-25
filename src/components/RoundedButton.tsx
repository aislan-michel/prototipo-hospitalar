import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {IRoundedButtonProps} from "../interfaces/IRoundedButtonProps"

export function RoundedButton({ title, ...rest }: IRoundedButtonProps) {
    return (
        <>
          <View style={styles.container}>
            <TouchableOpacity style={styles.button} activeOpacity={0.6} {...rest}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
          </View>
        </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15
  },
  button: {
    flex: 1,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#396B6D',
  },
  text: {
    color: '#fff'        
  }
});