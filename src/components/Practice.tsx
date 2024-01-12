import { useEffect, useRef, useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

import { mockData } from "../constant/mockData";

import Button from "./shared/Button";
import usePracticeStore from "../store/practice";

function Practice() {
  const timerBarRef = useRef<HTMLDivElement>(null);
  const intervalIdRef = useRef<number | null>(null);
  const { currentStatus, setCurrentStatus, timerSetting } = usePracticeStore();
  const [pageNum, setPageNum] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(timerSetting);

  function startInterval() {
    intervalIdRef.current = window.setInterval(() => {
      setTimeRemaining(prev => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(intervalIdRef.current!);
          return 0;
        }
      });
    }, 1000);
  }

  useEffect(() => {
    if (currentStatus === "pause") {
      clearInterval(intervalIdRef.current!);

      return;
    }

    startInterval();
    setCurrentStatus("start");

    return () => {
      clearInterval(intervalIdRef.current!);
    };
  }, [currentStatus]);

  if (timerBarRef.current) {
    timerBarRef.current.style.width =
      (timeRemaining / timerSetting) * 300 + "px";
  }

  return (
    <div {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.questionContainer)}>
        {timeRemaining ? mockData[pageNum].question : "시간 종료"}
      </div>
      <div ref={timerBarRef} {...stylex.props(styles.timerBar)} />
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

const styles = stylex.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: `calc(100vh - 70px)`,
  },
  questionContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "600px",
    color: colors.white,
    userSelect: "none",
  },
  timerBar: {
    width: "300px",
    height: "2px",
    backgroundColor: colors.mint,
    transition: "1s",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "auto",
    padding: 32,
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
    color: {
      default: colors.mint,
      ":hover": colors.white,
    },
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: {
      default: "none",
      ":hover": "0px 5px 10px teal",
    },
    overflow: "hidden",
  },
});

export default Practice;
