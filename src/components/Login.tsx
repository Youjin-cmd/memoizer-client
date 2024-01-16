import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

import Button from "./shared/Button";

function Login() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.visualSection)}>
        <h2 {...stylex.props(styles.subtitle)}>나의 질문 파트너</h2>
        <h1 {...stylex.props(styles.title)}>Memoizer</h1>
        <Button style={styles.button} onClick={() => {}}>
          <div {...stylex.props(styles.logoContainer)}>
            <img
              width="18px"
              height="18px"
              src="/assets/google_logo.png"
              alt="google logo"
            />
          </div>
          <span {...stylex.props(styles.buttonText)}>Sign in with Google</span>
        </Button>
      </div>
    </div>
  );
}

const styles = stylex.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: `calc(100vh - 70px)`,
  },
  visualSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "500px",
  },
  subtitle: {
    marginTop: 0,
    marginBottom: "50px",
    color: colors.mint,
  },
  title: {
    marginTop: 0,
    marginBottom: "100px",
    color: colors.mint,
    fontSize: "2.5rem",
  },
  button: {
    display: "flex",
    alignItems: "center",
    width: "230px",
    height: "55px",
    padding: 4,
    borderRadius: "5px",
    backgroundColor: {
      default: colors.blue,
      ":hover": colors.lightBlue,
    },
    boxShadow: {
      default: "none",
      ":hover": `0px 5px 10px ${colors.blue}`,
    },
    cursor: "pointer",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "48px",
    height: "48px",
    borderRadius: "5px",
    backgroundColor: colors.white,
  },
  buttonText: {
    marginLeft: "20px",
    fontWeight: 300,
    fontSize: "0.95rem",
    color: colors.white,
  },
});

export default Login;
