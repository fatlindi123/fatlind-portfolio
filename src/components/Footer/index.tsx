export default function Footer() {
  return (
    <footer style={{ padding: '22px 6.2vw', display: 'flex', justifyContent: 'space-between', gap: 16, borderTop: '1px solid var(--line)', color: 'var(--muted)', fontSize: 12 }}>
      <span>© {new Date().getFullYear()} Fatlind Lubishtani</span>
      <a href="#top" style={{ textDecoration: 'none' }}>Back to top ↑</a>
    </footer>
  );
}
