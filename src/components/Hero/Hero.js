import React from "react";
import Link from "next/link";

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
      <Link href="#projects">
        <Button>See Projects</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
