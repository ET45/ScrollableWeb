import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./styles.css";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <div className="bg-gray-200 sticky w-full h-100 top-0 z-1000 drop-shadow-lg flex flex-row ">
        <p className="w-1/2 flex justify-start py-8">Test Scroll</p>
        <ul className="flex justify-end flex-row w-1/2 space-x-3 py-8">
          <li>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 1
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 2
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 3
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 4
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 5
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
