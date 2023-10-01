import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  const a = "https://github.com/SHERRY699";
  return (
    <>
      <div className="div w-screen h-[50px] text-3xl flex items-center justify-center gap-2 dark:border-t-2 border-white text-black  dark:text-white dark:bg-gray-900">
        <Link to={a}>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <p>Sherry</p>
      </div>
    </>
  );
}

export default Footer;
