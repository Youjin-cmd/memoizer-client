import { useNavigate } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../tokens.stylex";

import useHeaderStore from "../../store/header";

import Button from "../shared/Button";

function HeaderTopics() {
  const navigate = useNavigate();
  const { setCurrentView } = useHeaderStore();

  function handleClickBack() {
    setCurrentView("main");
    navigate("/main");
  }

  return (
    <div {...stylex.props(styles.wrapper)}>
      <Button style={styles.buttonLeft} onClick={handleClickBack}>
        뒤로
      </Button>
      <span>주제 선택</span>
      <span {...stylex.props(styles.emptyRight)} />
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
    cursor: "pointer",
  },
  emptyRight: {
    width: "80px",
    marginRight: "25px",
  },
});

export default HeaderTopics;
