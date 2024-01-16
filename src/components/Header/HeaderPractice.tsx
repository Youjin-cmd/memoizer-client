import { useNavigate } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../tokens.stylex";

import usePracticeStore from "../../store/practice";
import useHeaderStore from "../../store/header";

import Button from "../shared/Button";

function HeaderPractice() {
  const { currentStatus, setCurrentStatus } = usePracticeStore();
  const { setCurrentView } = useHeaderStore();
  const navigate = useNavigate();

  function handleClickBack() {
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
      <Button style={styles.buttonLeft} onClick={handleClickBack}>
        종료
      </Button>
      <span>연습</span>
      <Button style={styles.buttonRight} onClick={handleClickPause}>
        {currentStatus === "pause" ? "재개" : "일시정지"}
      </Button>
    </div>
  );
}

const styles = stylex.create({
  wrapper: {
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
  },
});

export default HeaderPractice;
