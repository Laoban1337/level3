import React from "react";

function Footer() {
  return (
    <div>
      <footer id="footer">
        <section>
            <hr />
          <h2>Reach out</h2>
          <p>
            Feel free to reach out to me for any inquiries you may have. Whether
            you want to discuss coding, share ideas, or just chat, I'm here!
            Let's connect and explore the world of technology together.
          </p>
          {/* <ul className="actions">
            <li>
              <a href="generic.html" className="button">
                Learn More
              </a>
            </li>
          </ul> */}
        </section>
        <section>
            <hr />
          <h2>Contact Info</h2>
          <dl className="alt">
            <dt>Address</dt>
            <dd> Somwhere in &bull; Salt Lake City, UT 84000 &bull; USA</dd>
            <dt>Phone</dt>
            <dd>(000) 000-0000 x 0000</dd>
            <dt>Lostinfo@gmail.com</dt>
           
          </dl>
          {/* <ul className="icons">
            <li>
              <a href="#" className="icon brands fa-twitter alt">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-facebook-f alt">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-instagram alt">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-github alt">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-dribbble alt">
                <span className="label">Dribbble</span>
              </a>
            </li>
          </ul> */}
        </section>
        <p className="copyright">
          &copy;GlassWalker Studios.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
