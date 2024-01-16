import { Routes, Route, Navigate } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

import Login from "../components/Login";
import Header from "../components/Header/Header";
import Main from "../components/Main";
import Questions from "../components/Questions";
import Practice from "../components/Practice";
import Settings from "../components/Settings";
import Topics from "../components/Topics";

function App() {
  return (
    <div {...stylex.props(styles.container)}>
      <Header />
      <div {...stylex.props(styles.content)}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    maxWidth: "550px",
    backgroundColor: colors.black,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "auto",
  },
});

export default App;
