import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

const styles = stylex.create({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "full",
    height: "50px",
    color: colors.mint,
    backgroundColor: colors.black,
  },
});

function Footer() {
  return <div {...stylex.props(styles.wrapper)} />;
}

export default Footer;
