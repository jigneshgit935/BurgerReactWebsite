import React from 'react';
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from 'react-icons/ai';
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Your Big Burger</h2>
        <p>We are trying you to give a best tasty burger.</p>
        <br />
        <em>We give attention to genuine feedback.</em>

        <strong>All right received to @yourbigburger</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="infrinfr">
          <AiFillYoutube />
        </a>
        <a href="mnfiddni">
          <AiFillInstagram />
        </a>
        <a href="ifnrifnri">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
