import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../tokens.stylex";

interface TimerBarProps {
  timerBarRef: React.RefObject<HTMLDivElement>;
}

function TimerBar({ timerBarRef }: TimerBarProps) {
  return <div ref={timerBarRef} {...stylex.props(styles.timerBar)} />;
}

const styles = stylex.create({
  timerBar: {
    width: "300px",
    height: "2px",
    backgroundColor: colors.mint,
    transition: "1s",
  },
});

export default TimerBar;
