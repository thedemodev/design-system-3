import React from "react";
import {
  ColorProps,
  SpaceProps,
  WidthProps,
  MaxWidthProps,
  BorderRadiusProps,
  BoxShadowProps,
  TextAlignProps,
  OrderProps,
  HeightProps,
  MinHeightProps,
  MaxHeightProps,
  PositionProps,
  DisplayProps
} from "styled-system";

declare module "@nulogy/components" {
  interface BoxProps
    extends ColorProps,
      SpaceProps,
      WidthProps,
      MaxWidthProps,
      BorderRadiusProps,
      BoxShadowProps,
      TextAlignProps,
      OrderProps,
      HeightProps,
      MinHeightProps,
      MaxHeightProps,
      PositionProps,
      DisplayProps {}

  export function Box(props: BoxProps): React.FunctionComponent<BoxProps>;
}
