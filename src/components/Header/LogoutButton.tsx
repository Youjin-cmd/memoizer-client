import { useNavigate } from "react-router-dom";
import { styles } from ".";

import useHeaderStore from "../../store/header";
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

export default LogoutButton;
