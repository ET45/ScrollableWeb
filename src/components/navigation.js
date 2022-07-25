import React from "react";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navBar">
      <ul>
        <li>
          <Link
            activeClass="active"
            to="sectionId"
            spy={true}
            smooth={true}
            duration={500}
          >
            section1
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
