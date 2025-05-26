import { ArrowDownShortIcon, InboxIcon } from "@/app/_icons";

import React from "react";
import { format } from "date-fns";

const TopMenu: React.FC = () => {
  const date = new Date();

  return (
    <nav className="top-menu">
      <div className="wrapper">
        <ul className="left-menu">
          <li className="dropdown">
            <span className="dropdown-toggle gray-text icon-flex">
              Company
              <ArrowDownShortIcon />
            </span>
            <ul className="dropdown-menu">
              <li>
                <a href="#" className="gray-text">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="gray-text">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="gray-text">
                  Careers
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="gray-text">
              Downloads
            </a>
          </li>
          <li>
            <a href="#" className="gray-text">
              Contact Us
            </a>
          </li>
        </ul>
        <ul className="right-menu">
          <li>
            <span className="gray-text">
              {format(date, "EEEE - MMMM do 'at' h:mm a")}
            </span>
          </li>
          <li className="left-border">
            <a
              href="mailto:office@germancard.de"
              className="gray-text icon-flex"
            >
              <InboxIcon /> office@germancard.de
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopMenu;

