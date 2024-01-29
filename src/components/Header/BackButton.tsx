import { useNavigate } from "react-router-dom";
import { styles } from ".";

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

export default BackButton;