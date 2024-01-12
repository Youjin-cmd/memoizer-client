import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

import { mockData } from "../constant/mockData";

import Button from "./shared/Button";

const styles = stylex.create({
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 8,
    userSelect: "none",
  },
  questionButton: {
    display: "flex",
    alignItems: "center",
    width: "90%",
    height: "50px",
    marginBottom: "20px",
    padding: 16,
    borderStyle: "solid",
    borderWidth: "thin",
    borderColor: colors.mint,
    borderRadius: "10px",
    backgroundColor: colors.black,
    color: colors.white,
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: {
      default: "none",
      ":hover": "0px 5px 10px teal",
    },
    overflow: "hidden",
  },
});

function Questions() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      {mockData.map(element => {
        return (
          <Button key={element.id} style={styles.questionButton}>
            <span>{element.question}</span>
          </Button>
        );
      })}
    </div>
  );
}

export default Questions;
