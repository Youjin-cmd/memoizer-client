import { useNavigate } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../tokens.stylex";

import fetchData from "../../utils/fetchData";
import useHeaderStore from "../../store/header";

import Button from "../shared/Button";

function HeaderMain() {
  const navigate = useNavigate();
  const { setCurrentView } = useHeaderStore();

  async function handleClickLogout() {
    try {
      const response = await fetchData("POST", "auth/logout");

      const { success } = response.data;

      if (success) {
        setCurrentView("login");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error occured with loging out" + error);
    }
  }

  return (
    <div {...stylex.props(styles.wrapper)}>
      <span {...stylex.props(styles.empty)} />
      <span>Memoizer</span>
      <Button style={styles.buttonRight} onClick={handleClickLogout}>
        로그아웃
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
  },
  empty: {
    width: "90px",
  },
  buttonRight: {
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

export default HeaderMain;
