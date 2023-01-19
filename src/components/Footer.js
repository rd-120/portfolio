import React from 'react';
import { FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa';
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="social-links">
          <a href="https://wa.me/0524812556" target="_blank">
            <i class="fa fa-whatsapp whatsapp-icon"></i>
            <FaWhatsapp />
          </a>

          <a href="https://github.com/rd-120" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=desta1202@gmail.com&tf=1"
            target="_blank"
          >
            <FaEnvelope />
          </a>
        </div>
        <p>&copy; by rivka desta</p>
      </div>
    </footer>
  );
}

export default Footer;
