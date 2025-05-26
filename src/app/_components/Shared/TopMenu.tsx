import { ArrowDownShortIcon, InboxIcon } from "@/app/_icons";

import { Dropdown } from "./Dropdown";
import React from "react";
import { format } from "date-fns";

const TopMenu: React.FC = () => {
  const date = new Date();

  return (
    <nav className="top-menu">
      <div className="wrapper">
        <ul className="left-menu">
          <Dropdown
            title="Company"
            textStyle="grey"
            items={[
              { text: "About Us", link: "#" },
              { text: "Our Team", link: "#" },
            ]}
          />

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
