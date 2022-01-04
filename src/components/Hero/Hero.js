import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there! <br />
        I'm Benjamin.
      </SectionTitle>
      <SectionText>
        I am a front-end web developer currently on a journey of learning new
        technologies. Come check out my latest projects!
      </SectionText>
      <Button href="#projects">See Projects</Button>
    </LeftSection>
  </Section>
);

export default Hero;
