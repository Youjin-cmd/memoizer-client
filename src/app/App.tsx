import { Routes, Route } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    maxWidth: "550px",
    backgroundColor: colors.backgroundMint,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "full",
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
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
