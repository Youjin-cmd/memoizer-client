import { Routes, Route } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Questions from "../components/Questions";

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

function App() {
  return (
    <div {...stylex.props(styles.container)}>
      <Header />
      <div {...stylex.props(styles.content)}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
