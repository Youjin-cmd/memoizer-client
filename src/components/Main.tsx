import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";
import Button from "./shared/Button";

const styles = stylex.create({
  visaulSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "full",
    height: "500px",
    backgroundColor: colors.black,
    userSelect: "none",
  },
  phrase: {
    position: "absolute",
    color: colors.white,
  },
  ring: {
    width: "80%",
    height: "80%",
    overflow: "hidden",
    userSelect: "none",
  },
  buttonSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "full",
    height: "300px",
    backgroundColor: colors.black,
  },
  gridContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "25px",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: "10px",
    color: colors.white,
    backgroundColor: colors.black,
    borderWidth: "thin",
    borderColor: colors.mint,
    textDecoration: "none",
    fontSize: "1.1rem",
    cursor: "pointer",
    boxShadow: {
      default: "none",
      ":hover": "0px 5px 10px teal",
    },
  },
});

function Main() {
  return (
    <>
      <div {...stylex.props(styles.visaulSection)}>
        <span {...stylex.props(styles.phrase)}>
          나는 내가 더 노력할수록 운이 더 좋아진다
        </span>
        <img
          draggable={false}
          {...stylex.props(styles.ring)}
          src="/assets/ring.gif"
        />
      </div>
      <div {...stylex.props(styles.buttonSection)}>
        <div {...stylex.props(styles.gridContainer)}>
          <Button style={styles.button} onClick={() => {}}>
            빠른 시작
          </Button>
          <Button style={styles.button} onClick={() => {}}>
            주제 선택
          </Button>
          <Button style={styles.button} onClick={() => {}}>
            질문 관리
          </Button>
          <Button style={styles.button} onClick={() => {}}>
            설정
          </Button>
        </div>
      </div>
    </>
  );
}

export default Main;
