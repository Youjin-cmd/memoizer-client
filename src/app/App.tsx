import { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

import fetchData from "../utils/fetchData";
import useUserStore from "../store/user";

import Login from "../components/Login";
import Header from "../components/Header/Header";
import Main from "../components/Main";
import Questions from "../components/Questions";
import Practice from "../components/Practice";
import Settings from "../components/Settings";
import Topics from "../components/Topics";

function App() {
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  async function checkAuthStatus() {
    try {
      const response = await fetchData("GET", "auth/check");

      const { success, userInfo } = response.data;

      if (success) {
        setUser(userInfo);
        navigate("/main");
      } else {
        setUser({ username: "", userId: "" });
      }
    } catch (error) {
      console.error("Error checking auth" + error);
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
