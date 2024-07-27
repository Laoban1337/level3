import React from "react";

function About() {
  return (
    <div>
      <section id="second" className="main special">
        <header className="major">
          <h2>The Journey so far</h2>
          <p>
            Fill in inspiring sentence
            <br />
            And Make it a good one
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
        <p className="content">
          Hi, I'm Brian, a dedicated coder with a rich and diverse background.
          Originally from the Bahamas, I moved to Florida during my formative
          years and then made a life-changing move to Utah in 2011. My
          fascination with coding began in childhood, inspired by "Hackers" movies.
          However, it's only recently that I've been able to fully pursue this
          passion. I am committed to continuous learning and personal growth,
          eager to see how coding can transform not just my career but my
          perspective on problem-solving and creativity. My journey from the
          turquoise waters of the Bahamas to the snowy mountains of Utah
          reflects my persistence and passion for coding. In my coding journey,
          I believe in the value of experimentation and learning from mistakes.
          As Thomas Edison once said, "I have not failed. I've just found 10,000
          ways that won't work." This mindset drives me to innovate and persist,
          continuously improving my skills and finding new solutions. Join me as
          I navigate the exciting path of coding, embracing each challenge and
          opportunity to grow as a professional and as a person.
        </p>
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
