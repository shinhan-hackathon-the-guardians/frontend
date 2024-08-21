import { IoChevronBackOutline } from "react-icons/io5";

function Header() {
  return (
    <header style={styles.header}>
      <IoChevronBackOutline style={styles.icon} />
      {/* <h1 style={styles.title}>Header Title</h1> */}
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#f5f5f5",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
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

export default Header;
