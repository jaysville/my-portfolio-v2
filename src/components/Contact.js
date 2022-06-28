import "../styles/main.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3 className="text-center sectionHeading">Get In Touch</h3>
          <p className="text-center">
            Are you in need of a web developer? I'm open to freelance/contract
            jobs, and junior developer roles as well. Lets get in touch!
          </p>

          <div className="my-5 d-flex justify-content-center">
            <a
              href="mailto:olaotanabarowei@gmail.com"
              className="workBtn d-flex justify-content-center align-items-center nav-link"
            >
              Lets Work
            </a>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <a href="https://github.com/jaysville">
                <i
                  className="fa fa-github mySocials fa-lg"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div>
              <a href="https://WWW.instagram.com/jaysville_/">
                <i
                  className="fa fa-instagram mySocials fa-lg"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/olaotan-abarowei-a9a49b184">
                <i
                  className="fa fa-linkedin-square mySocials fa-lg"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/jaysville3">
                <i
                  className="fa fa-twitter mySocials fa-lg"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
