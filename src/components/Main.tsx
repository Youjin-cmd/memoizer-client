import { useNavigate } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

import useHeaderStore from "../store/header";

import Button from "./shared/Button";

function Main() {
  const navigate = useNavigate();
  const { setCurrentView } = useHeaderStore();

  function handleClickButton(type: string) {
    switch (type) {
      case "quickStart":
        setCurrentView("practice");
        navigate("/practice");
        break;

      case "selectTopic":
        setCurrentView("topics");
        navigate("/topics");
        break;

      case "manageQuestions":
        setCurrentView("questions");
        navigate("/questions");
        break;

      case "settings":
        setCurrentView("settings");
        navigate("/settings");
        break;
    }
  }

  return (
    <div {...stylex.props(styles.wrapper)}>
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
  visualSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "500px",
    userSelect: "none",
  },
  phrase: {
    position: "absolute",
    color: colors.white,
  },
  ring: {
    width: "400px",
    height: "400px",
    overflow: "hidden",
    userSelect: "none",
  },
  buttonSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "auto",
    padding: 32,
  },
  gridContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "25px",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 230,
    height: 100,
    borderRadius: "10px",
    color: colors.white,
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

export default Main;
