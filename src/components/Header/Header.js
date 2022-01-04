import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "10px",
          }}
        >
          <DiCssdeck size="3rem" />
          <Span>byc</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/bycho91" target="_blank">
        <AiFillGithub size="3rem" />
        <p style={{ fontSize: "1.1rem", fontWeight: "light" }}>/bycho91</p>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/bchomba/" target="_blank">
        <AiFillLinkedin size="3rem" />
        <p style={{ fontSize: "1.1rem", fontWeight: "lighter" }}>/bchomba</p>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
