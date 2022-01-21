import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:bycho1991@gmail.com">
            bycho1991@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer style={{ marginTop: "30px" }}>
        <SocialContainer>
          <SocialIcons href="https://github.com/bycho91" target="_blank">
            <AiFillGithub size="3rem" />
            <p style={{ fontSize: "1.1rem", fontWeight: "light" }}>/bycho91</p>
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/bchomba/"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />
            <p style={{ fontSize: "1.1rem", fontWeight: "lighter" }}>
              /bchomba
            </p>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
