import { useNavigate } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../tokens.stylex";

import fetchData from "../../utils/fetchData";
import useUserStore from "../../store/user";
import useHeaderStore from "../../store/header";

import Button from "../shared/Button";

function NewQuestion() {
  const navigate = useNavigate();
  const { setCurrentView } = useHeaderStore();
  const { user } = useUserStore();
  async function handleClickCreate() {
    try {
      const newQuestion = {
        question: "질문이름2",
        answer: "답변2",
        topic: "일반",
      };

      const response = await fetchData(
        "POST",
        `users/${user.userId}/question`,
        newQuestion,
      );

      if (response.data.success) {
        navigate("/questions");
        setCurrentView("questions");
      }
    } catch (error) {
      console.error("Error occured with loging in" + error);
    }
  }

  return (
    <div {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.form)}>
        <div {...stylex.props(styles.container)}>
          <span {...stylex.props(styles.title)}>질문</span>
          <textarea {...stylex.props(styles.question)} />
        </div>
        <div {...stylex.props(styles.container)}>
          <span {...stylex.props(styles.title)}>답변</span>
          <textarea {...stylex.props(styles.answer)} />
        </div>
        <div {...stylex.props(styles.container)}>
          <span {...stylex.props(styles.title)}>주제</span>
          <div {...stylex.props(styles.select)}>
            <span {...stylex.props(styles.placeholder)}>주제 선택</span>
            <span {...stylex.props(styles.placeholder)}>▾</span>
          </div>
        </div>
      </div>
      <div {...stylex.props(styles.buttonSection)}>
        <Button style={styles.button} onClick={handleClickCreate}>
          생성
        </Button>
      </div>
    </div>
  );
}

const styles = stylex.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: `calc(100vh - 70px)`,
    color: colors.mint,
    userSelect: "none",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    height: "auto",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  title: {
    marginBottom: "10px",
  },
  question: {
    display: "flex",
    height: "40px",
    padding: 8,
    borderStyle: "solid",
    borderWidth: "thin",
    borderColor: colors.mint,
    borderRadius: "10px",
    backgroundColor: {
      default: colors.black,
      ":focus": colors.hoverMint,
    },
    color: colors.white,
    resize: "none",
  },
  answer: {
    display: "flex",
    height: "150px",
    padding: 8,
    borderStyle: "solid",
    borderWidth: "thin",
    borderColor: colors.mint,
    borderRadius: "10px",
    backgroundColor: {
      default: colors.black,
      ":focus": colors.hoverMint,
    },
    color: colors.white,
    resize: "none",
  },
  select: {
    display: "flex",
    justifyContent: "space-between",
    height: "20px",
    padding: 8,
    borderStyle: "solid",
    borderWidth: "thin",
    borderColor: {
      default: colors.mint,
      ":active": colors.white,
    },
    borderRadius: "10px",
    backgroundColor: {
      default: colors.black,
      ":hover": colors.hoverMint,
    },
    color: colors.white,
  },
  placeholder: {
    fontSize: "0.8rem",
    color: colors.mint,
    opacity: "70%",
  },
  buttonSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  button: {
    width: "80px",
    height: "30px",
    borderStyle: "solid",
    borderRadius: "5px",
    borderWidth: "thin",
    borderColor: colors.mint,
    color: {
      default: colors.mint,
      ":hover": colors.white,
    },
    boxShadow: {
      default: "none",
      ":hover": "0px 5px 10px teal",
    },
    cursor: "pointer",
  },
});

export default NewQuestion;
