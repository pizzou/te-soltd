import React from "react";

const NavLinks = () => {
  const Links = [
    {
      name: "Industries",
      link: "/",
    },
    {
      name: "Featured Insights",
      link: "/",
    },
    {
      name: "Careers",
      link: "/",
    },
    {
      name: "About Us",
      link: "/",
    },
    {
      name: "TE-SO Blog",
      link: "/"
    },
  ];
  return (
    <>
      {Links.map((link, i) => (
        <li key={i} className="font-semibold hover:text-primary">
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
