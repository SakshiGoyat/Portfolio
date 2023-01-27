import Header from "../../components/header/Header";

import { About, Skills, ProjectPage, Contact, Experience } from "..";
const Home = () => {
  return (
    <>
      <Header />
      <section className="section-about">
        <About />
      </section>
      <section className="section-about">
        <Skills />
      </section>
      <section className="section-about">
        <ProjectPage />
      </section>
      <section className="section-about">
        <Experience />
      </section>
      <section className="section-about">
        <Contact />
      </section>
    </>
  );
};

export default Home;
