import { useNavigate } from "react-router-dom";
import { styles } from ".";

import useHeaderStore from "../../store/header";

import { IView } from "../../types/type";
import Button from "../shared/Button";

interface BackButtonProps {
  view: IView;
  route: string;
}

function BackButton({ view, route }: BackButtonProps) {
  const navigate = useNavigate();
  const { setCurrentView } = useHeaderStore();

  function handleClickBack() {
    setCurrentView(view);
    navigate(route);
  }

  return (
    <Button style={styles.buttonLeft} onClick={handleClickBack}>
      뒤로
    </Button>
  );
}

export default BackButton;
