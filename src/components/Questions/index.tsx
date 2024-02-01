import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../tokens.stylex";

import fetchData from "../../utils/fetchData";
import useUserStore from "../../store/user";
import useHeaderStore from "../../store/header";

import Button from "../shared/Button";

interface Question {
  _id: string;
  question: string;
  answer: string;
  topic: string;
}

function Questions() {
  const { user } = useUserStore();
  const navigate = useNavigate();
  const { setCurrentView } = useHeaderStore();
  const [questions, setQuestions] = useState<Question[]>();

  async function getAllQuestions() {
    try {
      const response = await fetchData("GET", `users/${user.userId}/questions`);

      const { questions } = response.data;

      setQuestions(questions);
    } catch (error) {
      console.error("Failed to request questions: ", error);
    }
  }

  useEffect(() => {
    getAllQuestions();
  }, []);

  function handleClickQuestion(
    id: string,
    question: string,
    answer: string,
    topic: string,
  ) {
    navigate(`/questions/${id}`, { state: { question, answer, topic } });
    setCurrentView("question");
  }

  return (
    <div {...stylex.props(styles.wrapper)}>
      {questions?.map(question => {
        return (
          <Button
            key={question._id}
            style={styles.questionButton}
            onClick={() =>
              handleClickQuestion(
                question._id,
                question.question,
                question.answer,
                question.topic,
              )
            }
          >
            <span>{question.question}</span>
          </Button>
        );
      })}
    </div>
  );
}

const styles = stylex.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: `calc(100vh - 70px)`,
  },
  questionButton: {
    display: "flex",
    alignItems: "center",
    width: "90%",
    height: "50px",
    marginBottom: "20px",
    padding: 16,
    borderStyle: "solid",
    borderWidth: "thin",
    borderColor: colors.mint,
    borderRadius: "10px",
    backgroundColor: colors.black,
    color: colors.white,
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: {
      default: "none",
      ":hover": "0px 5px 10px teal",
    },
    overflow: "hidden",
  },
});

export default Questions;
