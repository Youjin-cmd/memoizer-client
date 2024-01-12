import { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

import { mockData } from "../constant/mockData";

import Button from "./shared/Button";

const styles = stylex.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
  },
  questionContainer: {
    display: "flex",
    alignItems: "center",
    height: "500px",
    color: colors.white,
    userSelect: "none",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "90%",
    height: "auto",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    height: "50px",
    padding: 16,
    borderStyle: "solid",
    borderWidth: "thin",
    borderColor: colors.mint,
    borderRadius: "10px",
    backgroundColor: colors.black,
    color: colors.mint,
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: {
      default: "none",
      ":hover": "0px 5px 10px teal",
    },
    overflow: "hidden",
  },
});

function Practice() {
  const [pageNum, setPageNum] = useState(0);

  return (
    <div {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.questionContainer)}>
        {mockData[pageNum].question}
      </div>
      <div {...stylex.props(styles.buttonsContainer)}>
        <Button
          style={styles.button}
          onClick={() => setPageNum(prev => prev - 1)}
        >
          이전
        </Button>
        <Button style={styles.button}>정답 보기</Button>
        <Button
          style={styles.button}
          onClick={() => setPageNum(prev => prev + 1)}
        >
          다음
        </Button>
      </div>
    </div>
  );
}

export default Practice;
