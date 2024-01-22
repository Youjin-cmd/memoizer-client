import { useNavigate } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../tokens.stylex";

import useHeaderStore from "../../store/header";

import Button from "../shared/Button";

function BackButton() {
  const navigate = useNavigate();
  const { setCurrentView } = useHeaderStore();

  function handleClickBack() {
    setCurrentView("main");
    navigate("/main");
  }

  return (
    <Button style={styles.buttonLeft} onClick={handleClickBack}>
      뒤로
    </Button>
  );
}

export const styles = stylex.create({
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
});

export default BackButton;
