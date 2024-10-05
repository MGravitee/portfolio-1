import { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { MGLogo } from "./icons";
import { ThemeSwitch } from "./ThemeSwitchBtn";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <header className="h-[5rem] w-fi p-4 flex flex-row justify-between gap-2">
          <div className="nav-content">
            <MGLogo className="nav-logo" onClick={this.scrollToTop} />
          </div>
          <nav className="nav flex flex-row" id="navbar">
            <ul className="nav-items">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                >
                  Work
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ThemeSwitch />
          </nav>
      </header>
    );
  }
}
