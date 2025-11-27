import * as React from 'react';
import {
  View,
  type LayoutChangeEvent,
  type LayoutRectangle,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { useIsActive } from './context';

export interface UnmountWrapperProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<ViewStyle>;
}

const ZERO_LAYOUT: LayoutRectangle = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

export function UnmountWrapper({
  style,
  placeholderStyle,
  children,
}: UnmountWrapperProps) {
  const isActive = useIsActive();
  const sizeRef = React.useRef(ZERO_LAYOUT);

  const handleLayout = (event: LayoutChangeEvent) => {
    sizeRef.current = event.nativeEvent.layout;
  };

  if (!isActive) {
    const { width, height } = sizeRef.current;
    return <View style={[style, placeholderStyle, { width, height }]} />;
  }

  return (
    <View style={style} onLayout={handleLayout}>
      {children}
    </View>
  );
}
