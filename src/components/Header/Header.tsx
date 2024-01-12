import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../tokens.stylex";

import useHeaderStore from "../../store/header";
import HeaderPractice from "./HeaderPractice";
import HeaderSettings from "./HeaderSettings";
import HeaderQuestions from "./HeaderQuestions";
import HeaderTopics from "./HeaderTopics";
import HeaderMain from "./HeaderMain";

const styles = stylex.create({
  wrapper: {
    display: "flex",
    width: "100%",
    height: "70px",
    color: colors.mint,
    fontWeight: "bold",
    userSelect: "none",
  },
});

function Header() {
  const { currentView } = useHeaderStore();
  return (
    <div {...stylex.props(styles.wrapper)}>
      {currentView === "main" && <HeaderMain />}
      {currentView === "practice" && <HeaderPractice />}
      {currentView === "topics" && <HeaderTopics />}
      {currentView === "questions" && <HeaderQuestions />}
      {currentView === "settings" && <HeaderSettings />}
    </div>
  );
}

export default Header;
