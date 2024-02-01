import { useLocation } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../tokens.stylex";

function Question() {
  const location = useLocation();
  const question = location.state.question;
  const answer = location.state.answer;
  const topic = location.state.topic;

  return (
    <div {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.textBox)}>
        <span>질문</span>
        <span>{question}</span>
      </div>
      <div {...stylex.props(styles.textBox)}>
        <span>답변</span>
        <span>{answer}</span>
      </div>
      <div {...stylex.props(styles.textBox)}>
        <span>주제</span>
        <span>{topic}</span>
      </div>
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
  textBox: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "50px",
    color: colors.mint,
    textAlign: "center",
  },
});

export default Question;
