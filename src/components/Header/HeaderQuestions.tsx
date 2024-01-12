import { useNavigate } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../tokens.stylex";

import Button from "../shared/Button";

function HeaderQuestions() {
  const navigate = useNavigate();

  function handleClickBack() {
    navigate("/");
  }

  return (
    <div {...stylex.props(styles.wrapper)}>
      <Button style={styles.buttonLeft} onClick={handleClickBack}>
        뒤로
      </Button>
      <span>질문 관리</span>
      <Button style={styles.buttonRight}>생성</Button>
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

export default HeaderQuestions;
