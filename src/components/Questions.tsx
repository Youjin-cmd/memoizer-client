import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

import { mockData } from "../constant/mockData";

import Button from "./shared/Button";

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

const styles = stylex.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: `calc(100vh - 70px)`,
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

export default Questions;
