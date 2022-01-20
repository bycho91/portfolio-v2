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
        Howdy! <br />
        I'm Benjamin.
      </SectionTitle>
      <SectionText>
        I am a front-end web developer based out of Dallas, Tx. Come see my latest projects to see what I've been working on!
      </SectionText>
      <Link href="#projects">
        <Button>See Projects</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
