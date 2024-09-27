import React from "react";
import { FaLinkedin, FaOrcid } from "react-icons/fa";
import { FaResearchgate, FaGoogleScholar } from "react-icons/fa6";
import { SiScopus } from "react-icons/si";

const SocialLinks = () => {
  // Social links that display on the left-side of the screen
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/dr-dirgha-raj-joshi-570464129/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          ORCID <FaOrcid size={25} />
        </>
      ),
      href: "https://orcid.org/0000-0002-1437-6661",
    },
    {
      id: 3,
      child: (
        <>
          ResearchGate <FaResearchgate size={25} />
        </>
      ),
      href: "https://www.researchgate.net/profile/Dirgha-Joshi-2",
    },
    {
      id: 4,
      child: (
        <>
          Google Scholar <FaGoogleScholar size={25} />
        </>
      ),
      href: "https://scholar.google.com/citations?user=zAZLp2kAAAAJ",
    },
    {
      id: 5,
      child: (
        <>
          Scopus <SiScopus size={25} />
        </>
      ),
      href: "https://www.scopus.com/authid/detail.uri?authorId=57219008210",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:!flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              `flex justify-between items-center w-36 h-10 px-3 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-cyan-600 to-blue-900 ` +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white text-xs"
              target="_blank"
              rel="noopener noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
