import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faInstagram, faTwitter, faVk } from '@fortawesome/free-brands-svg-icons';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Footer() {
  return (
    <>
    <div>
      <div className="footer">
        <a className="soc"  href="">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a className="soc" href="https://www.instagram.com/intocode/?hl=ru">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="soc"  href="https://twitter.com/?lang=ru">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
    </>

  );
}

export default Footer;
