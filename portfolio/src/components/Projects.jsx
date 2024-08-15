import React from "react";

function Projects() {
  return (
    <div id="main">
      <section id="intro" className="main">
        <div className="spotlight">
          <div className="content">
            <header className="major">
              <h2>Commited Coding</h2>
            </header>
            <p className="content">
              Hi, I'm Brian, a coder with a rich background. Originally from the
              Bahamas, I moved to Florida and then Utah in 2011. Inspired by the
              "Hackers" movies, my childhood fascination with coding is now a
              full-fledged passion. Committed to continuous learning and
              personal growth, I explore how coding can transform my career and
              enhance my creativity. My journey from the Bahamas to Utah
              reflects my persistence. Embracing experimentation and learning
              from mistakes, I'm driven by Thomas Edison's mindset: "I have not
              failed. I've just found 10,000 ways that won't work." Join me as I
              navigate the exciting path of coding, embracing each challenge and
              opportunity to grow.
            </p>
            {/* <p>
              Since beginning my coding journey, I've been dedicated to
              continuous learning, overcoming challenges, and exploring the
              limitless potential of code. Every day brings new opportunities
              for growth and discovery. As a proud graduate of V School, I am
              committed to leveraging my skills and knowledge to make a
              meaningful impact in the tech industry.
            </p> */}
            {/* <ul className="actions">
              <li>
                <a href="generic.html" className="button">
                  Learn More
                </a>
              </li>
            </ul> */}
          </div>
          <span className="image">
            <img src="images/pic01.jpg" alt="" />
          </span>
        </div>
      </section>

      <section id="first" className="main special">
        <header className="major">
          <h2>Passion Projects</h2>
        </header>
        <ul className="features">
          <li>
            {/* <span className="icon solid major style1 fa-code"></span> */}
            <a href="https://GlassWalker.onrender.com/">
              <img
                src="./GWalt.jpg"
                alt="Glass Walker Productions Logo"
                className="chorelogo"
              />
            </a>
            <h3>Glass Walker Productions</h3>
            <p>
              "Game development has always been a passion of mine, and as I've
              progressed in my journey, I realized it was time to take the
              plunge. I’ve begun learning C++ to develop with the Unreal Engine,
              driven by my love for new technology and the desire to continually
              challenge myself. With dedication and a bit of luck, I aim to
              create something extraordinary. You can follow the progress of my
              future indie game company, Glass Walker Productions!"
            </p>
          </li>
          <li>
            {/* <span className="icon major style3 fa-copy"></span> */}
            <a href="https://choreboar.onrender.com/">
              <img
                src="./choreboarLogo.jpg"
                alt="chore boar logo"
                className="chorelogo"
              />
            </a>
            <h3>ChoreBoar</h3>
            <p>
              "Introducing our chore list app! Perfect for roommates, parents,
              siblings, or anyone in a household. Create shared chore lists. "
            </p>
          </li>
          {/* <li>
            <span className="icon major style5 fa-gem"></span>
            <h3>Fill app here later</h3>
            <p>fill in description later</p>
          </li> */}
        </ul>
        <footer className="major">
          <ul className="actions special">
            {/* <li>
              <a href="generic.html" className="button">
                Learn More
              </a>
            </li> */}
          </ul>
        </footer>
      </section>
    </div>
  );
}

export default Projects;
