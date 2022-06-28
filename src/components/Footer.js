import "../styles/main.css";

const Footer = () => {
  return (
    <footer className="myFooter text-center">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="mb-3">
            <span className="footerText">&copy; Olaotan Abarowei 2022</span>
            <a href="#header" className="nav-link">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
