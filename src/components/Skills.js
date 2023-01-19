import React from 'react';
import { SiMongodb, SiMysql } from 'react-icons/si';
import { DiBootstrap, DiJqueryLogo } from 'react-icons/di';
import {
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';

function Skills() {
  return (
    <section className="section section-skills">
      <h1 className="section-title">skills</h1>
      <div className="skills">
        <div className="skills-box ">
          <h3>front end</h3>
          <ul>
            <li>
              <FaHtml5 className="logo-icon html5" />
              <span className="span-html">HTML5</span>
            </li>

            <li>
              <FaCss3Alt className="logo-icon css3" />
              <span className="span-html">CSS3</span>
            </li>
            <li>
              <FaJsSquare className="logo-icon js" />
              <span className="span-html">javaScript</span>
            </li>
          </ul>
        </div>
        <div className="skills-box  ">
          <h3>back end</h3>
          <ul>
            <li>
              <SiMongodb className="logo-icon mongo" />
              <span className="span-html">mongoDB</span>
            </li>
            <li>
              <FaNodeJs className="logo-icon node" />
              <span className="span-html">node.JS</span>
            </li>
            <li>
              <SiMysql className="logo-icon sql" />
              <span className="span-html">SQL</span>
            </li>
          </ul>
        </div>
        <div className="skills-box">
          <h3>framework</h3>
          <ul>
            <li>
              <FaReact className="logo-icon react" />
              <span className="span-html">ReactJS</span>
            </li>
            <li>
              <DiBootstrap className="logo-icon bootstrap" />
              <span className="span-html">Bootstrap</span>
            </li>
            <li>
              <DiJqueryLogo className="logo-icon jquery" />
              <span className="span-html">jQuery</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
