import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { FaCss3Alt, FaFigma, FaHtml5, FaJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  Icons,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      These are the range of technologies I've worked with so far in my journey.
    </SectionText>
    <List>
      <ListItem>
        <FaJs size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>Javascript | Python</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>ReactJS | NextJS</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTailwindcss size="3rem" />
        <ListContainer>
          <ListTitle>Others</ListTitle>
          <ListParagraph>HTML | CSS | Figma</ListParagraph>
          <ListParagraph>Tailwind | MUI</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
