export default function Section({ title, children }) {
  return (
    <section style={{ padding: "16px", borderTop: "1px solid #eee" }}>
      <h2 style={{ marginBottom: 10 }}>{title}</h2>
      <div style={{ lineHeight: 1.6 }}>{children}</div>
    </section>
  );
}
