import "../styles/main.css";

const About = () => {
  return (
    <section id="about">
      <div className="row">
        <div className="col-md-6 ">
          <article className="text-center">
            <h3 className="mb-4 sectionHeading">About me</h3>
            <p>
              I am Olaotan Abarowei, an Electrical and Electronics Engineering
              student at the University of lagos. My passion for web development
              started about 6 years ago when I was a clueless kid making scrap
              websites with no code tools and trying to implement google adsense
              on them. Fast-forward many years later, after participating in
              bootcamps and self-learning using various resources across the
              web, I am a fullstack developer with passion for solving problems
              and implementing abstract ideas from scratch. When I am not
              coding, I am either working out or looking for ways to get better
              at what i do.
            </p>
          </article>
        </div>

        <div className="col-md-6   d-none d-md-block">
          <div className="mx-5">{/* <!-- Intentionally left blank --> */}</div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6  d d-none d-md-block">
          {/* <!-- Intentionally left blank --> */}
        </div>

        <div className="col-md-6">
          <article className="text-center">
            <h3 className="sectionHeading">Certifications</h3>
            <ul>
              <li>Cisco IT Essentials -2018</li>
              <li>The Web Developer BootCamp 2022 by Colt Steele</li>
            </ul>
          </article>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <div className="text-center">
            <h3 className="sectionHeading">Career Objectives</h3>
            <p>
              Diligent Electrical and Electronics Engineering major currently
              attending the University of Lagos. Aiming to leverage proven
              problem solving, creative thinking, and critical thinking skills
              to successfully implement abstract ideas from scratch. Frequently
              praised as focused by my peers, I can be relied upon to help my
              client/company achieve their goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
