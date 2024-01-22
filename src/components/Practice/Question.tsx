import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../tokens.stylex";

interface TimerBarProps {
  timeRemaining: number;
  question: string;
}

function Question({ timeRemaining, question }: TimerBarProps) {
  return (
    <div {...stylex.props(styles.questionContainer)}>
      {timeRemaining ? question : "시간 종료"}
    </div>
  );
}

const styles = stylex.create({
  questionContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "600px",
    color: colors.white,
    userSelect: "none",
  },
});

export default Question;
