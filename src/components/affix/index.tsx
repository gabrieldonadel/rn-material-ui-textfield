import React from 'react';
import {
  Animated,
  ColorValue,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface AffixProps {
  labelAnimation: Animated.Value;
  style?: StyleProp<TextStyle>;
  children?: string;
  type: 'prefix' | 'suffix';
  fontSize: number;
  color: ColorValue;
}

const Affix = ({
  labelAnimation,
  style,
  children,
  type,
  fontSize,
  color,
}: AffixProps) => {
  let containerStyle: Animated.AnimatedProps<StyleProp<ViewStyle>> = {
    height: fontSize * 1.5,
    opacity: labelAnimation,
  };

  let textStyle: StyleProp<TextStyle> = {
    includeFontPadding: false,
    textAlignVertical: 'top',
    fontSize,
    color,
  };

  switch (type) {
    case 'prefix':
      containerStyle.paddingRight = 8;
      textStyle.textAlign = 'left';
      break;

    case 'suffix':
      containerStyle.paddingLeft = 8;
      textStyle.textAlign = 'right';
      break;
  }

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <Animated.Text style={[style, textStyle]}>{children}</Animated.Text>
    </Animated.View>
  );
};

export default Affix;

const styles = StyleSheet.create({
  container: {
    top: 2,
    justifyContent: 'center',
  },
});
