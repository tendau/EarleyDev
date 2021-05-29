import React, { Component, component } from "react";
import WOW from "./../../node_modules/wowjs";
import profilepic from "./../assets/images/profilepic.jpg";
import charecter from "./../assets/images/charecter-small.png";
import logo from "./../assets/images/logo.png";

export default class TodosList extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector("#mh-header").className =
        "black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp nav-strict";
    } else {
      document.querySelector("#mh-header").className =
        "black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp";
    }
  };

  render() {
    return (
      <div>
        <header
          className="black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp"
          id="mh-header"
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-expand-lg mh-nav nav-btn">
                <a className="navbar-brand" href="#">
                  <img
                    style={{ height: "69px" }}
                    src={logo}
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-0 ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#mh-home">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#mh-about">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#mh-skills">
                        Skills
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#mh-experience">
                        Experiences
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#mh-contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>

        <section className="mh-home" id="mh-home">
          <div className="home-ovimg">
            <div className="container">
              <div className="row xs-column-reverse section-separator vertical-middle-content home-padding">
                <div className="col-sm-6">
                  <div className="mh-header-info">
                    <div
                      className="mh-promo wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.1s"
                    >
                      <span>Hello I'm</span>
                    </div>

                    <h2
                      className="wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.2s"
                    >
                      Chris Earley
                    </h2>
                    <h4
                      className="wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.3s"
                    >
                      Developer
                    </h4>

                    <ul>
                      <li
                        className="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.4s"
                      >
                        <i className="fa fa-envelope"></i>
                        <a href="mailto:">jrekct@gmail.com</a>
                      </li>
                      <li
                        className="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.5s"
                      >
                        <i className="fa fa-phone"></i>
                        <a href="callto:">+719 339 7353</a>
                      </li>
                      <li
                        className="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.6s"
                      >
                        <i className="fa fa-map-marker"></i>
                        <address>
                          7926 Martinwood Pl Colorado Springs, CO{" "}
                        </address>
                      </li>
                    </ul>

                    <ul
                      className="social-icon wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.7s"
                    >
                      <li>
                        <a href="https://www.facebook.com/cearley2">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/christopher-earley-86606580/">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/tendau">
                          <i className="fa fa-github"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="hero-img wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.6s"
                  >
                    <div className="img-border">
                      <img
                        style={{ height: "360px" }}
                        src={profilepic}
                        alt="profile picture"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mh-about" id="mh-about">
          <div className="container">
            <div className="row section-separator">
              <div className="col-sm-12 col-md-6">
                <div
                  className="mh-about-img shadow-2 wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.4s"
                >
                  <img src={charecter} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="mh-about-inner">
                  <h2
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.1s"
                  >
                    About Me
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.2s"
                  >
                    My name is Chris Earley. I am a software devloper with
                    experience developing full-stack applications using React,
                    C#, ASP.NET, MVC, MongoDB, SQL, and other technologies.
                  </p>
                  <div
                    className="mh-about-tag wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.3s"
                  >
                    <ul>
                      <li>
                        <span>React</span>
                      </li>
                      <li>
                        <span>html</span>
                      </li>
                      <li>
                        <span>css</span>
                      </li>
                      <li>
                        <span>Javascript</span>
                      </li>
                      <li>
                        <span>C#</span>
                      </li>
                      <li>
                        <span>ASP.NET</span>
                      </li>
                      <li>
                        <span>MVC</span>
                      </li>
                      <li>
                        <span>Agile</span>
                      </li>
                      <li>
                        <span>Scrum</span>
                      </li>
                    </ul>
                  </div>
                  <a
                    href=""
                    className="btn btn-fill wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.4s"
                  >
                    Downlaod CV <i className="fa fa-download"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mh-service">
          <div className="container">
            <div className="row section-separator">
              <div
                className="col-sm-12 text-center section-title wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
              >
                <h3>What I do</h3>
              </div>
              <div className="col-sm-4">
                <div
                  className="mh-service-item shadow-1 dark-bg wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.3s"
                >
                  <i className="fa fa-bullseye purple-color"></i>
                  <h3>Software Development</h3>
                  <p>
                    I have been developing software solutions professionally for
                    5+ years on applications including CRM programs, client
                    facing web portals, and document analysis software.
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div
                  className="mh-service-item shadow-1 dark-bg wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.5s"
                >
                  <i className="fa fa-code iron-color"></i>
                  <h3>Web Development</h3>
                  <p>
                    During my career I ahve worked as a full stack developer on
                    MERN applications, ASP.NET MVC applications, and mixed
                    React/C# applications, as well as smaller web design
                    projects
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div
                  className="mh-service-item shadow-1 dark-bg wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.7s"
                >
                  <i className="fa fa-object-ungroup sky-color"></i>
                  <h3>Database Desing</h3>
                  <p>
                    In conjunction with the applications that I helped develope
                    I worked closely with different databases such as SQL,
                    MongoDB, LiteDB, and SQLLite
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mh-skills" id="mh-skills">
          <div className="container">
            <div className="row section-separator">
              <div className="section-title text-center col-sm-12">
                <h2>Skills</h2>
              </div>
              <div className="col-sm-12 col-md-12">
                <div className="mh-skills-inner">
                  <div
                    className="mh-professional-skill wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.3s"
                  >
                    <div className="each-skills">
                      <div className="candidatos">
                        <div className="parcial">
                          <div className="info">
                            <div className="nome">C#</div>
                            <div className="percentagem-num">8/10</div>
                          </div>
                          <div className="progressBar">
                            <div
                              className="percentagem"
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="candidatos">
                        <div className="parcial">
                          <div className="info">
                            <div className="nome">Javascript</div>
                            <div className="percentagem-num">7/10</div>
                          </div>
                          <div className="progressBar">
                            <div
                              className="percentagem"
                              style={{ width: "70%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="candidatos">
                        <div className="parcial">
                          <div className="info">
                            <div className="nome">React</div>
                            <div className="percentagem-num">7/10</div>
                          </div>
                          <div className="progressBar">
                            <div
                              className="percentagem"
                              style={{ width: "70%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="candidatos">
                        <div className="parcial">
                          <div className="info">
                            <div className="nome">SQL</div>
                            <div className="percentagem-num">6/10</div>
                          </div>
                          <div className="progressBar">
                            <div
                              className="percentagem"
                              style={{ width: "60%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="candidatos">
                        <div className="parcial">
                          <div className="info">
                            <div className="nome">MongoDB</div>
                            <div className="percentagem-num">3/10</div>
                          </div>
                          <div className="progressBar">
                            <div
                              className="percentagem"
                              style={{ width: "30%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="candidatos">
                        <div className="parcial">
                          <div className="info">
                            <div className="nome">AWS</div>
                            <div className="percentagem-num">1/10</div>
                          </div>
                          <div className="progressBar">
                            <div
                              className="percentagem"
                              style={{ width: "10%;" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mh-experince" id="mh-experience">
          <div className="bolor-overlay">
            <div className="container">
              <div className="row section-separator">
                <div className="col-sm-12 col-md-6">
                  <div className="mh-education">
                    <h3
                      className="wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.2s"
                    >
                      Education
                    </h3>
                    <div className="mh-education-deatils">
                      <div
                        className="mh-education-item dark-bg wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.3s"
                      >
                        <h4>
                          Bachelor's in Computer Science From{" "}
                          <a href="">UCCS</a>
                        </h4>
                        <div className="mh-eduyear">2018</div>
                        <p>
                          I graduated from the University of Colorado at
                          Colorado Springs with my bachelor's in computer
                          science in the spring of 2018
                        </p>
                      </div>
                      <div
                        className="mh-education-item dark-bg wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.5s"
                      >
                        <h4>
                          Foundations of User Experience (UX) Design From
                          <a href="">Google</a>
                        </h4>
                        <div className="mh-eduyear">2021</div>
                        <p>
                          I completed the Foundations of User Experience (UX)
                          Design course that google released in 2020. The course
                          was designed to teach the fundamentals behind creating
                          innovative user experiences as well as how to use
                          industry tools and perform market research.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="mh-work">
                    <h3>Work Experience</h3>
                    <div className="mh-experience-deatils">
                      <div
                        className="mh-work-item dark-bg wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.4s"
                      >
                        <h4>
                          Software Engineer II <a href="">Boecore Inc</a>
                        </h4>
                        <div className="mh-eduyear">2020 - current</div>
                        <span>Responsibility :</span>
                        <ul className="work-responsibility">
                          <li>
                            <i className="fa fa-circle"></i>Provided full stack
                            development on the RAMS product working in React,
                            C#, and LiteDB
                          </li>
                          <li>
                            <i className="fa fa-circle"></i>Generated user
                            stories from client meetings
                          </li>
                          <li>
                            <i className="fa fa-circle"></i>Worked in a SCRUM
                            agile environment
                          </li>
                        </ul>
                      </div>
                      <div
                        className="mh-work-item dark-bg wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.6s"
                      >
                        <h4>
                          .Net Developer <a href="">USOPC</a>
                        </h4>
                        <div className="mh-eduyear">2020</div>
                        <span>Responsibility :</span>
                        <ul className="work-responsibility">
                          <li>
                            <i className="fa fa-circle"></i>Updated and maintain
                            the TeamUSA.org website and related software
                          </li>
                          <li>
                            <i className="fa fa-circle"></i>Worked in ASP.Net
                            MVC, Sitecore CRM, Akamai CDN, and Azure cloud
                            services
                          </li>
                          <li>
                            <i className="fa fa-circle"></i>Worked agile
                            environment
                          </li>
                        </ul>
                      </div>
                      <div
                        className="mh-work-item dark-bg wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.7s"
                      >
                        <h4>
                          Developer <a href="">Mountain States Imaging </a>
                        </h4>
                        <div className="mh-eduyear">2019-2020</div>
                        <span>Responsibility :</span>
                        <ul className="work-responsibility">
                          <li>
                            <i className="fa fa-circle"></i>Developed and
                            maintained ASP.NET MVC web applications
                          </li>
                          <li>
                            <i className="fa fa-circle"></i>Developed internal
                            windows applications to solve complex issues and
                            improve workflow
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="mh-footer" id="mh-contact">
          <div className="map-image image-bg">
            <div className="container">
              <div className="row section-separator">
                <div
                  className="col-sm-12 section-title wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                >
                  <h3>Contact Me</h3>
                </div>
                <div className="col-sm-12 mh-footer-address">
                  <div className="row">
                    <div className="col-sm-12 col-md-4">
                      <div
                        className="mh-address-footer-item dark-bg shadow-1 wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.3s"
                      >
                        <div className="each-icon">
                          <i className="fa fa-location-arrow"></i>
                        </div>
                        <div className="each-info">
                          <h4>Address</h4>
                          <address>
                            7926 Martinwood Pl, Colorado Springs, CO
                            <br />
                          </address>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                      <div
                        className="mh-address-footer-item dark-bg shadow-1 wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.5s"
                      >
                        <div className="each-icon">
                          <i className="fa fa-envelope-o"></i>
                        </div>
                        <div className="each-info">
                          <h4>Email</h4>
                          <a href="mailto:jrekct@gmail.com">jrekct@gmail.com</a>
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                      <div
                        className="mh-address-footer-item dark-bg shadow-1 wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.7s"
                      >
                        <div className="each-icon">
                          <i className="fa fa-phone"></i>
                        </div>
                        <div className="each-info">
                          <h4>Phone</h4>
                          <a href="callto:(719)-339-7353">(719)-339-7353</a>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-12 col-md-12 wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.3s"
                >
                  <form
                    id="contactForm"
                    className="single-form quate-form wow fadeInUp"
                    data-toggle="validator"
                  >
                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <input
                          name="name"
                          className="contact-name form-control"
                          id="name"
                          type="text"
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <input
                          name="name"
                          className="contact-email form-control"
                          id="L_name"
                          type="text"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                      <div className="col-sm-12">
                        <input
                          name="name"
                          className="contact-subject form-control"
                          id="email"
                          type="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                      <div className="col-sm-12">
                        <textarea
                          className="contact-message"
                          id="message"
                          rows="6"
                          placeholder="Your Message"
                          required
                        ></textarea>
                      </div>
                      <div className="btn-form col-sm-12">
                        <button
                          type="submit"
                          className="btn btn-fill btn-block"
                          id="form-submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="col-sm-12 mh-copyright wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.3s"
                ></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
