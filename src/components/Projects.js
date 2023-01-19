import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

function Projects() {
  return (
    <section className="section section-projects">
      <h1 className="section-title">Projects</h1>
      <div className="project-box">
        <div className="project">
          <h3 className="project-title">project 1</h3>
          <p>
            Cocktails app, you can search for different recipes by the name of
            the cocktail.
            <br />
            Created with ReactJS and consuming the TheCocktailDB API
          </p>
          <ul className="project_stack">
            <li>react</li>
            <li>css</li>
            <li>html</li>
          </ul>
          <a
            href="https://cocktailapp-react.netlify.app/"
            target="_blank"
            className="link link-project"
          >
            <FiExternalLink />
          </a>
        </div>

        <div className="project">
          <h3 className="project-title">project 2</h3>
          <p>
            A movie app that gives information about movies, with a movie search
            option.
            <br />
            Created with ReactJS and consuming the OMDb Movies API
          </p>
          <ul className="project_stack">
            <li>react</li>
            <li>css</li>
            <li>html</li>
          </ul>
          <a
            href="https://movies-db-reactapp.netlify.app/"
            target="_blank"
            className="link link-project"
          >
            <FiExternalLink />
          </a>
        </div>
        <div className="project">
          <h3 className="project-title">project 3</h3>
          <p>
            A game app where you have to guess the correct number.
            <br />
            Created with JavaScript
          </p>
          <ul className="project_stack">
            <li>js</li>
            <li>css</li>
            <li>html</li>
          </ul>
          <a
            href="https://guessnumber-app.netlify.app"
            className="link link-project"
            target="_blank"
          >
            <FiExternalLink />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
