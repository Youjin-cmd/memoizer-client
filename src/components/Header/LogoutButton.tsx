import { useNavigate } from "react-router-dom";

import * as stylex from "@stylexjs/stylex";
import useHeaderStore from "../../store/header";
import { colors } from "../../../tokens.stylex";

import fetchData from "../../utils/fetchData";

import Button from "../shared/Button";

function LogoutButton() {
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
    <Button style={styles.logout} onClick={handleClickLogout}>
      로그아웃
    </Button>
  );
}

export const styles = stylex.create({
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

export default LogoutButton;
