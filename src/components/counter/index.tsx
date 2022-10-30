import React from 'react';
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
} from 'react-native';

interface CounterProps {
  count: number;
  limit?: number;
  baseColor: ColorValue;
  errorColor: ColorValue;
  style?: StyleProp<TextStyle>;
}

const Counter = ({
  count,
  limit,
  baseColor,
  errorColor,
  style,
}: CounterProps) => {
  if (!limit) {
    return null;
  }

  return (
    <Text
      style={[
        styles.text,
        style,
        {
          color: count > limit ? errorColor : baseColor,
        },
      ]}
    >{`${count} / ${limit}`}</Text>
  );
};

export default Counter;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'right',
    backgroundColor: 'transparent',
    paddingVertical: 2,
    marginLeft: 8,
  },
});
