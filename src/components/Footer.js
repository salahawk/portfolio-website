import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaTelegramPlane, FaDiscord, FaSkype } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by ~salahawk~</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} {"<salahawk>"}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/salahawk"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="https://twitter.com/salahawk"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li> */}
            {/* <li className="social-icons">
              <a
                href="https://www.instagram.com/salahawk"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li> */}
            <li className="social-icons">
              <a
                href="https://t.me/salahawk"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://discord.com/users/salahawk#7119"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaDiscord />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://join.skype.com/invite/mxO32NNjcXNw"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaSkype />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
