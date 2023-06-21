import React from 'react'
import styled from "styled-components"
import { BsLinkedin, BsFacebook } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"
export default function Footer() {
  return (
    <FooterContainer>
      <span>Debangshi @copyright &copy;Travel-Buddy. All rights reserved</span>
      <ul className="links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#recommend">Places</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
      <ul className="social__links">
        <li>
          <BsFacebook />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <BsLinkedin />
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #ffffff;
  border-radius: 0.5rem;
  padding: 1.5rem;
  color: #4d0039;
  font-weight:450;

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: #b30083;
        font-weight:500;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #4d0039;
          font-weight: 700;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #ff00bb;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;