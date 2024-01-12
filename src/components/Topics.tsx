import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

const styles = stylex.create({
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 8,
    userSelect: "none",
    color: colors.white,
  },
});

function Topics() {
  return <div {...stylex.props(styles.wrapper)}>topics</div>;
}

export default Topics;
