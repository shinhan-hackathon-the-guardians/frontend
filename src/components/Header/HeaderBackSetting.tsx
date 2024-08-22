import { IoChevronBackOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

function HeaderBackSetting() {
  return (
    <header style={styles.header}>
      <IoChevronBackOutline style={styles.icon} />
      <CiSettings style={styles.icon} />
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
  title: {
    marginLeft: "10px",
    fontSize: "18px",
  },
};

export default HeaderBackSetting;
