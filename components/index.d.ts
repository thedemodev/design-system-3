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

type IconSide = "left" | "right";
type ButtonSize = "small" | "medium" | "large";
interface ButtonProps extends SpaceProps, StyledChildrenProps {
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: string;
  iconSide?: IconSide;
  size?: ButtonSize;
  [prop: string]: any; // TODO: Find a better way to allow attributes for HTML <button> element
}
export class Button extends React.Component<ButtonProps> {}
export class PrimaryButton extends Button {}
export class DangerButton extends Button {}
export class QuietButton extends Button {}
