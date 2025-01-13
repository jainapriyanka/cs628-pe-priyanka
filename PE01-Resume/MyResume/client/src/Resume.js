import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Priyanka Jaina</h1>
        <p>4850 156th ave ne, Redmond, WA, 98052 | (206) 271-3114 | jainapriyanka@cityuniversity.edu</p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <div>
          <h3>Master of Science in Computer Science</h3>
          <p>City University Of Seattle, WA USA | May 2025</p>
          <p>GPA: 3.9/4.0</p>

          <h3>Bachelor Of Technology in Electronics And Communication Engineering</h3>
          <p>Mallareddy Institute Of Engineering And Technology, Hyderabad, India | Aug 2021</p>
          <p>GPA: 3.7/4.0</p>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul>
          <li>Programming languages: Java, Python, JavaScript, C++</li>
          <li>Frameworks and libraries: React, Spring Boot, Django, Node.js, Express.js</li>
          <li>Database systems: MySQL, MongoDB</li>
          <li>Operating systems: Windows, Linux</li>
          <li>Version control: Git</li>
        </ul>
      </section>

      <section className="section">
        <h2>Work Experience</h2>
        <div>
          <h3>Software Developer</h3>
          <p>VIRTUSA Consulting Services, Hyderabad India | Jan 2022 - Dec 2022</p>
          <ul>
            <li>Worked on a team to develop a new web application using React and Node.js</li>
            <li>Collaborated with team members to design and implement features</li>
            <li>Debugged and fixed issues in the codebase</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div>
          <h3>Personal Website</h3>
          <p>
            Built a personal website using React and deployed it on GitHub Pages.
            <br />
            Source code:{" "}
            <a
              href="https://github.com/studentname/personal-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </p>

          <h3>Online Bookstore</h3>
          <p>
            Developed a web application for an online bookstore using Spring Boot and MySQL.
            <br />
            Source code:{" "}
            <a
              href="https://github.com/studentname/online-bookstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
