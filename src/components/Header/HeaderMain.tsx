import * as stylex from "@stylexjs/stylex";

function HeaderMain() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <span {...stylex.props(styles.empty)} />
      <span>Memoizer</span>
      <span {...stylex.props(styles.empty)} />
    </div>
  );
}

const styles = stylex.create({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  empty: {
    width: "90px",
  },
});

export default HeaderMain;
