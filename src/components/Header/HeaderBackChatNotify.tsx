import { IoChevronBackOutline } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa6";

function HeaderBackChatNotify() {
  return (
    <header style={styles.header}>
      <IoChevronBackOutline style={styles.icon} />
      <div style={styles.iconContainer}>
        <TbMessageChatbot style={styles.icon} />
        <FaRegBell style={{ ...styles.icon, marginLeft: "8px" }} />
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#f5f5f5",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    height: "44px",
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

export default HeaderBackChatNotify;
