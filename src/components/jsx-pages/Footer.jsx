import React, { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";
import { PiArrowCircleDownRightLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Footer = () => {
  const { infoFooterArray } = useContext(InfoContext);

  return (
    <>
      {infoFooterArray.map((info, index) => (
        <div key={index}>
          <p>
            {info.texto} {info.empresa}
          </p>

          <Link className="footer-flecha" target="_blank" to={info.link}>
            <PiArrowCircleDownRightLight />
          </Link>

        </div>
      ))}
    </>
  );
};

export default Footer;
