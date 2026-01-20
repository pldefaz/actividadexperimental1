import Navbar from "./Navbar";

export default function Header() {
  return (
    <header
      style={{
        background: "#1f1f1f",
        padding: "14px 18px",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    > 
      <Navbar />
    </header>
  );
}
 