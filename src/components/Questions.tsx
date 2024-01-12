import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

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
    justifyItems: "center",
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
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: {
      default: "none",
      ":hover": "0px 5px 10px teal",
    },
    overflow: "hidden",
  },
  question: {
    color: colors.white,
  },
});

const mockData = [
  {
    id: crypto.randomUUID(),
    question: "자바스크립트에 대해서 말씀해보세요.",
    answer:
      "자바스크립트는 동적이고 인터프리터 언어로, 주로 웹 브라우저에서 클라이언트 측 웹 개발에 사용되는 프로그래밍 언어입니다. 브라우저 상에서 사용자와 상호작용하며 웹 페이지를 동적으로 제어하고 이벤트를 처리하는 데 주로 활용됩니다. 최근에는 Node.js와 같은 환경에서 서버 측 프로그래밍에도 사용되고 있습니다.",
    topic: "null",
  },
  {
    id: crypto.randomUUID(),
    question: "이벤트 버블링과 캡쳐링에 대해 설명해주세요.",
    answer:
      "자바스크립트는 동적이고 인터프리터 언어로, 주로 웹 브라우저에서 클라이언트 측 웹 개발에 사용되는 프로그래밍 언어입니다. 브라우저 상에서 사용자와 상호작용하며 웹 페이지를 동적으로 제어하고 이벤트를 처리하는 데 주로 활용됩니다. 최근에는 Node.js와 같은 환경에서 서버 측 프로그래밍에도 사용되고 있습니다.",
    topic: "null",
  },
];

function Questions() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      {mockData.map(element => {
        return (
          <Button key={element.id} style={styles.questionButton}>
            <span {...stylex.props(styles.question)}>{element.question}</span>
          </Button>
        );
      })}
    </div>
  );
}

export default Questions;
