import * as stylex from "@stylexjs/stylex";

import Button from "../components/shared/Button";

const styles = stylex.create({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    maxWidth: "640px",
    backgroundColor: {
      default: "lightblue",
    },
  },
  button: {
    width: "50px",
    height: "30px",
    backgroundColor: {
      default: "white",
    },
    borderStyle: "none",
    borderRadius: "5px",
  },
});

function App() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      Memoizer
      <Button style={styles.button} onClick={() => {}}>
        button
      </Button>
    </div>
  );
}

export default App;
