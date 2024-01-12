/* eslint-disable @typescript-eslint/no-explicit-any */
import * as stylex from "@stylexjs/stylex";
import { StyleXArray } from "@stylexjs/stylex/lib/StyleXTypes";

interface ButtonProps {
  id?: string;
  style?: StyleXArray<any>;
  children?: React.ReactNode;
  onClick?: (...args: any[]) => void;
}

function Button({ id, style, children, onClick }: ButtonProps) {
  return (
    <button id={id} {...stylex.props(styles.base, style)} onMouseDown={onClick}>
      {children}
    </button>
  );
}

const styles = stylex.create({
  base: {
    borderStyle: "none",
    outline: "none",
    backgroundColor: "inherit",
    textDecoration: "none",
  },
});

export default Button;
