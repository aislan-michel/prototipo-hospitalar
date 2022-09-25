import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {IHorizontalButtonProps} from "../interfaces/IHorizontalButtonProps"

export function HorizontalButton({ title, ...rest }: IHorizontalButtonProps) {
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
  },
  button: {
    margin: 15,
    backgroundColor: '#fff',
    padding: 10
  },
  text: {
    fontSize: 25
  }
});