import Landing from "./Landing";
import About from "./About";
import Projects from "./Projects";
import Stack from "./Stack";
import Contact from "./Contact";

const Main = () => {
  return (
    <main className="container mt-3  animate__fadeInUp animate__animated">
      <Landing />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <hr />
    </main>
  );
};
export default Main;
