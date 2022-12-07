const footerStyle = {
  background: "#FFFFFF",
  color: "#000000",
  borderTop: "2px black solid",
  fontWeight: "bold"
}

const Footer = () => {
  return (
    <footer className="text-center text-lg-start footer navbar-fixed-bottom mt-2" style={footerStyle}>
      <div className="text-center p-3">[&lt;/&gt; with &lt;3 by aaryamann]</div>
    </footer>
  );
};

export default Footer;
