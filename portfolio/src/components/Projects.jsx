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
            <p>
              "Since starting my coding journey, I've proudly never missed a
              day. I'm committed to learning, persevering against all odds, and
              embracing the endless possibilities provided by code. Every day is
              a new opportunity to grow and explore!"
            </p>
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
            <span className="icon solid major style1 fa-code"></span>
            <h3>Gastro Roulette</h3>
            <p>
              "Struggling to decide what's for dinner? Can't agree on a
              restaurant with your partner? Introducing our app that takes local
              eateries in your area, places them on a roulette, and chooses
              where you'll eat at random! Say goodbye to dinner dilemmas!"
            </p>
          </li>
          <li>
            <span className="icon major style3 fa-copy"></span>
            <h3>Chorefull</h3>
            <p>
              "Introducing our chore list app! Perfect for roommates, parents,
              siblings, or anyone in a household. Create shared chore lists with
              features like Random Chore, Vote on Chores, and Fixed assignments.
              Plus, a point-based system lets the household compete for weekly
              badges and prizes. Say hello to organized and fun chores!"
            </p>
          </li>
          <li>
            <span className="icon major style5 fa-gem"></span>
            <h3>Fill app here later</h3>
            <p>
           fill in description later
            </p>
          </li>
        </ul>
        <footer className="major">
          <ul className="actions special">
            <li>
              <a href="generic.html" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </footer>
      </section>
    </div>
  );
}

export default Projects;
