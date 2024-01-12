import { useNavigate } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

import Button from "./shared/Button";

const styles = stylex.create({
  visualSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "500px",
    backgroundColor: colors.black,
    userSelect: "none",
  },
  phrase: {
    position: "absolute",
    color: colors.white,
  },
  ring: {
    width: "80%",
    height: "80%",
    overflow: "hidden",
    userSelect: "none",
  },
  buttonSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "300px",
    backgroundColor: colors.black,
  },
  gridContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "25px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {
    width: 230,
    height: 100,
    borderRadius: "10px",
    color: colors.white,
    backgroundColor: colors.black,
    borderStyle: "solid",
    borderWidth: "thin",
    borderColor: colors.mint,
    fontSize: "1.1rem",
    cursor: "pointer",
    boxShadow: {
      default: "none",
      ":hover": "0px 5px 10px teal",
    },
  },
});

function Main() {
  const navigate = useNavigate();

  function handleClickButton(type: string) {
    switch (type) {
      case "quickStart":
        navigate("/practice");
        break;

      case "manageQuestions":
        navigate("/questions");
    }
  }

  return (
    <>
      <div {...stylex.props(styles.visualSection)}>
        <span {...stylex.props(styles.phrase)}>
          나는 내가 더 노력할수록 운이 더 좋아진다
        </span>
        <img
          draggable={false}
          {...stylex.props(styles.ring)}
          src="/assets/ring.gif"
        />
      </div>
      <div {...stylex.props(styles.buttonSection)}>
        <div {...stylex.props(styles.gridContainer)}>
          <Button
            style={styles.button}
            onClick={() => handleClickButton("quickStart")}
          >
            빠른 시작
          </Button>
          <Button
            style={styles.button}
            onClick={() => handleClickButton("selectTopic")}
          >
            주제 선택
          </Button>
          <Button
            style={styles.button}
            onClick={() => handleClickButton("manageQuestions")}
          >
            질문 관리
          </Button>
          <Button
            style={styles.button}
            onClick={() => handleClickButton("settings")}
          >
            설정
          </Button>
        </div>
      </div>
    </>
  );
}

export default Main;
