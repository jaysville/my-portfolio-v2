import projectData from "../projectData";
import parse from "html-react-parser";
import Slider from "./Slider";
import "../styles/main.css";
const Projects = () => {
  return (
    <section id="projects">
      <h3 className="sectionHeading text-center">My Projects</h3>
      {projectData.map(({ name, desc, link, images, id }) => {
        return (
          <div className="mb-3" key={id}>
            <div className="row bg-dark text-light py-2 border-1 border-light">
              <div className="col-lg-5">
                <Slider data={images} />
              </div>
              <div className="col-lg-7">
                <div className="card-body">
                  <h5 className="card-title projectTitle">{name}</h5>
                  <br />
                  <p className="card-text">{parse(desc)}</p>
                  <a
                    href={link}
                    className="btn btn-outline-info btn-lg projectBtn"
                  >
                    View {name}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
