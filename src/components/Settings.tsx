import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

function Settings() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.settingContainer)}>
        <span {...stylex.props(styles.settingName)}>답변시간</span>
        <select name="timeLimit">
          <option value="1분">1분</option>
          <option value="2분">2분</option>
          <option value="3분">3분</option>
          <option value="4분">4분</option>
          <option value="5분">5분</option>
        </select>
      </div>
      <div {...stylex.props(styles.settingContainer)}>
        <span {...stylex.props(styles.settingName)}>남은 시간</span>
        <select name="timeRemaining">
          <option value="보이기">보이기</option>
          <option value="숨기기">숨기기</option>
        </select>
      </div>
      <div {...stylex.props(styles.settingContainer)}>
        <span {...stylex.props(styles.settingName)}>테마</span>
        <select name="nightMode">
          <option value="다크">다크</option>
          <option value="라이트">라이트</option>
        </select>
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
  },
  settingContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "50%",
    height: "30px",
    marginBottom: "20px",
    padding: 16,
    backgroundColor: colors.black,
    color: colors.white,
    fontSize: "1rem",
  },
  settingName: {
    marginRight: "10px",
  },
});

export default Settings;
