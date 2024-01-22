import { useNavigate } from "react-router-dom";

import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../tokens.stylex";

import usePracticeStore from "../../store/practice";
import useHeaderStore from "../../store/header";

import Button from "../shared/Button";
import BackButton from "./BackButton";
import LogoutButton from "./LogoutButton";
import NewButton from "./NewButton";

function Header() {
  const navigate = useNavigate();
  const { currentStatus, setCurrentStatus } = usePracticeStore();
  const { currentView, setCurrentView } = useHeaderStore();

  function handleClickQuit() {
    setCurrentStatus("ready");
    setCurrentView("main");
    navigate("/main");
  }

  function handleClickPause() {
    if (currentStatus === "start") {
      setCurrentStatus("pause");
    } else {
      setCurrentStatus("start");
    }
  }

  return (
    <div {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.container)}>
        {currentView === "main" && (
          <>
            <span {...stylex.props(styles.emptyLeft)} />
            <span>Memoizer</span>
            <LogoutButton />
          </>
        )}
        {currentView === "practice" && (
          <>
            <Button style={styles.buttonLeft} onClick={handleClickQuit}>
              종료
            </Button>
            <span>연습</span>
            <Button style={styles.buttonRight} onClick={handleClickPause}>
              {currentStatus === "pause" ? "재개" : "일시정지"}
            </Button>
          </>
        )}
        {currentView === "topics" && (
          <>
            <BackButton />
            <span>주제 선택</span>
            <span {...stylex.props(styles.emptyRight)} />
          </>
        )}
        {currentView === "questions" && (
          <>
            <BackButton />
            <span>질문 관리</span>
            <NewButton />
          </>
        )}
        {currentView === "new" && (
          <>
            <BackButton />
            <span>새 질문</span>
            <span {...stylex.props(styles.emptyRight)} />
          </>
        )}
        {currentView === "settings" && (
          <>
            <BackButton />
            <span>설정</span>
            <span {...stylex.props(styles.emptyRight)} />
          </>
        )}
      </div>
    </div>
  );
}

export const styles = stylex.create({
  wrapper: {
    display: "flex",
    width: "100%",
    height: "70px",
    color: colors.mint,
    fontWeight: "bold",
    userSelect: "none",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    fontSize: "1.1rem",
  },
  buttonLeft: {
    width: "80px",
    height: "auto",
    marginLeft: "25px",
    color: {
      default: colors.mint,
      ":hover": colors.white,
    },
    fontSize: "1.1rem",
    userSelect: "none",
    textAlign: "left",
    cursor: "pointer",
  },
  buttonRight: {
    width: "80px",
    height: "auto",
    marginRight: "25px",
    color: {
      default: colors.mint,
      ":hover": colors.white,
    },
    fontSize: "1.1rem",
    userSelect: "none",
    textAlign: "right",
    cursor: "pointer",
  },
  emptyLeft: {
    width: "80px",
    marginLeft: "25px",
  },
  emptyRight: {
    width: "80px",
    marginRight: "25px",
  },
  logout: {
    width: "80px",
    height: "30px",
    marginRight: "25px",
    borderStyle: "solid",
    borderRadius: "5px",
    borderWidth: "thin",
    borderColor: colors.mint,
    color: {
      default: colors.mint,
      ":hover": colors.white,
    },
    boxShadow: {
      default: "none",
      ":hover": "0px 5px 10px teal",
    },
    cursor: "pointer",
  },
});

export default Header;
