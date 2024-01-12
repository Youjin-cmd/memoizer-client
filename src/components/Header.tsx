import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

const styles = stylex.create({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "70px",
    color: colors.mint,
    backgroundColor: colors.black,
    fontWeight: "bold",
    userSelect: "none",
  },
});

function Header() {
  return <div {...stylex.props(styles.wrapper)}>Memoizer</div>;
}

export default Header;
