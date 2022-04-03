import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopading>
    <LeftSection>
      <SectionTitle main center>
        Hello, <br />
        My Name is Divine Higgins
      </SectionTitle>
      <SectionText>
        I'm a full stack developer from New York with a passion for learning and
        building applications.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://drive.google.com/file/d/1T-hTIl6K6_haScQ6jE56zwH6pEUiBTHi/view?usp=sharing")
        }
      >

        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
