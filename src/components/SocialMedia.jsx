import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/iamankush0078" target="_blank">
        <AiFillGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/iamankush0078/" target="_blank">
        <AiFillLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/ankushbh0078/" target="_blank">
        <AiFillInstagram />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/iamankush0078" target="_blank">
        <AiFillFacebook />
      </a>
    </div>
    <div>
      <a href="https://wa.me/8851674492" target="_blank">
        <FaWhatsapp />
      </a>
    </div>
  </div>
);

export default SocialMedia;
