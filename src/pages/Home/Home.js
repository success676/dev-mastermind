// Home/index.js
import { useEffect, useRef } from 'react';
import Header from '../../components/header/Header';
import Project from '../../components/project/Project';
import { projects } from '../../helpers/projectsList';
import './style.css';

const Home = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('project-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="title-1">My Projects</h2>
            <p className="section-subtitle">Explore my latest works and case studies</p>
          </div>

          <ul className="projects">
            {projects.map((project, index) => {
              return (
                <li
                  key={index}
                  ref={(el) => (projectRefs.current[index] = el)}
                  className="project-item"
                  style={{ '--delay': `${index * 0.1}s` }}>
                  <Project
                    title={project.title}
                    img={project.img}
                    index={index}
                    skills={project.skills || []}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
