import React from "react";

export type Handler = () => void;

export interface InjectedProps {
  onDismiss?: Handler;
  className?: string;
  style?: React.CSSProperties;
}

export interface ModalProps extends InjectedProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
  headerBackground?: string;
  minWidth?: string;
}
