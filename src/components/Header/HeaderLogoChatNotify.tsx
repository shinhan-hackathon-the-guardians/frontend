import { TbMessageChatbot } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa6";

function HeaderLogoChatNotify() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <h1>Logo</h1>
      </div>
      <div style={styles.iconContainer}>
        <TbMessageChatbot style={styles.icon} />
        <FaRegBell style={{ ...styles.icon, marginLeft: "8px" }} />
      </div>
    </header>
  );
}

const styles = {
  logo: {
    fontSize: "24px", // 아이콘 크기 조정
    cursor: "pointer",
    padding: "0px 15px",
    backgroundColor: "#e0e0e0",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#f5f5f5",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  icon: {
    fontSize: "24px",
    cursor: "pointer",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center", // 아이콘 수직 정렬
  },
};

export default HeaderLogoChatNotify;
