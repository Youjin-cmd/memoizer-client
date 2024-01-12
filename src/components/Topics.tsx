import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

function Topics() {
  return <div {...stylex.props(styles.wrapper)}>topics</div>;
}

const styles = stylex.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: `calc(100vh - 70px)`,
    color: colors.white,
  },
});

export default Topics;
