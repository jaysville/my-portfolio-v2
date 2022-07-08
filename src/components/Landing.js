import "../styles/main.css";

const Landing = () => {
  return (
    <section id="landing" className=" mb-5">
      <div className="row">
        <div className="col-md-6">
          <p>Hi, I'm Olaotan,</p>
          <div className="mb-4">
            <h1 className="display-1 myHeading">A Fullstack</h1>
            <h1 className="display-1 myHeading">Developer.</h1>
          </div>

          <p className="mb-5">
            I love to make functional websites and web apps. <br /> Hope I leave
            an impression
          </p>
          <div id=" yourFlex" className="row">
            <div className="col">
              <p className="mr-auto">
                Highly skilled in making functional and user-friendly websites
                and webapps that meets client expectations
              </p>
            </div>
            <div className="col">
              <p className="ml-auto d-flex">
                I implement UX friendly Frontend Features and also build backend
                sites with full RESTful pattern and CRUD functionalty using
                cutting edge technology.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="m-5">
            <img
              src="../../images/Landing_Image.jpg"
              alt=""
              className="img-fluid img-thumbnail"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
