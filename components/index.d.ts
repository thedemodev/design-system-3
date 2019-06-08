declare module "@nulogy/components" {
  import * as React from "react";
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

  // Mimics how children can be passed to styled components
  interface StyledChildrenProps {
    children?: React.ReactNode;
  }

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
      DisplayProps,
      StyledChildrenProps {}

  export class Box extends React.Component<BoxProps> {}
}
