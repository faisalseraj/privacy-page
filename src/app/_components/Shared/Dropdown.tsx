import { ArrowDownShortIcon } from "@/app/_icons";

export type ServiceItem = {
  textStyle: "bold" | "semi-bold" | "grey";
  title: string;
  items: {
    text: string;
    link: string;
  }[];
};
export const Dropdown = ({ title, items, textStyle }: ServiceItem) => {
  const menuStyle = textStyle === "grey" ? "grey-text" : "normal-text";
  return (
    <ul className="dropdown-wrapper">
      <li className="dropdown">
        <span className={`dropdown-toggle icon-flex ${textStyle}-text`}>
          {title}
          <ArrowDownShortIcon />
        </span>
        <ul className="dropdown-menu">
          {items?.map((item) => {
            return (
              <li key={item.text}>
                <a href={item.link} className={`${menuStyle} ellipsis`}>
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
};
