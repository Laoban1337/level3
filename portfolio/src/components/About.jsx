import React from "react";

function About() {
  return (
    <div>
      <section id="second" className="main special">
        <header className="major">
          <h2>The Journey so far</h2>
          <p>
            Hi, I’m Brian, a dedicated coder with a diverse background. My
            journey through the tech world has equipped me with a robust set of
            skills. I specialize in JavaScript and React, which I use to build
            dynamic and efficient web applications. For backend development, I
            utilize C# to create robust server-side solutions, while TypeScript
            adds precision and reliability to my code. 
            <hr></hr>
            
            To manage data, I use
            MongoDB and Mongoose, ensuring efficient data handling and storage.
            I rely on Git and GitHub for version control, facilitating effective
            collaboration and progress tracking. Having completed my training at
            V School, I am committed to continuous learning and professional
            growth. I am eager to leverage my skills and knowledge to tackle new
            challenges and contribute to innovative projects.
          </p>
        </header>
        {/* <ul className="statistics">
          <li className="style1">
            <span className="icon solid fa-code-branch"></span>
            <strong>5,120</strong> Etiam
          </li>
          <li className="style2">
            <span className="icon fa-folder-open"></span>
            <strong>8,192</strong> Magna
          </li>
          <li className="style3">
            <span className="icon solid fa-signal"></span>
            <strong>2,048</strong> Tempus
          </li>
          <li className="style4">
            <span className="icon solid fa-laptop"></span>
            <strong>4,096</strong> Aliquam
          </li>
          <li className="style5">
            <span className="icon fa-gem"></span>
            <strong>1,024</strong> Nullam
          </li>
        </ul> */}

        <footer className="major">
          {/* <ul className="actions special">
            <li>
              <a href="generic.html" className="button">
                Learn More
              </a>
            </li>
          </ul> */}
        </footer>
      </section>
    </div>
  );
}
export default About;
