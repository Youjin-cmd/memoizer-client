import { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

import fetchData from "../utils/fetchData";
import useUserStore from "../store/user";
import useHeaderStore from "../store/header";

import Login from "../components/Login";
import Header from "../components/Header";
import Main from "../components/Main";
import Questions from "../components/Questions";
import Practice from "../components/Practice";
import Settings from "../components/Settings";
import Topics from "../components/Topics";
import NewQuestion from "../components/NewQuestion";

function App() {
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();
  const { setCurrentView } = useHeaderStore();

  async function checkAuthStatus() {
    try {
      const response = await fetchData("GET", "auth/check");

      const { userInfo } = response.data;

      setUser({ username: userInfo.username, userId: userInfo.userId });
      setCurrentView("main");
      navigate("/main");
    } catch (error) {
      setUser({ username: "", userId: "" });
      navigate("/");
    }
  }

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <div {...stylex.props(styles.container)}>
      <Header />
      <div {...stylex.props(styles.content)}>
        <Routes>
          <Route path="/login" element={<Login />} />
          {user.username && (
            <>
              <Route path="/main" element={<Main />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/questions/new" element={<NewQuestion />} />
              <Route path="/settings" element={<Settings />} />
            </>
          )}
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
