import { useNavigate } from "react-router-dom";
import { styles } from ".";

import useHeaderStore from "../../store/header";

import Button from "../shared/Button";

function NewButton() {
  const navigate = useNavigate();
  const { setCurrentView } = useHeaderStore();

  function handleClickCreate() {
    setCurrentView("new");
    navigate("/questions/new");
  }

  return (
    <Button style={styles.buttonRight} onClick={handleClickCreate}>
      새 질문
    </Button>
  );
}

export default NewButton;
