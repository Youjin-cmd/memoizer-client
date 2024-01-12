import { useNavigate } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../tokens.stylex";

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
  emptyRight: {
    width: "80px",
    marginRight: "25px",
  },
});

import Button from "../shared/Button";

function HeaderSettings() {
  const navigate = useNavigate();

  function handleClickBack() {
    navigate("/");
  }

  return (
    <div {...stylex.props(styles.wrapper)}>
      <Button style={styles.buttonLeft} onClick={handleClickBack}>
        뒤로
      </Button>
      <span>설정</span>
      <span {...stylex.props(styles.emptyRight)} />
    </div>
  );
}

export default HeaderSettings;
