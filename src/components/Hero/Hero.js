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
        Hi, my name is <br /> Youssef Sahli. <br />I build web applications.
      </SectionTitle>
      <SectionText>
        I'm a software engineer and full stack web developer specializing in
        building (and occasionally designing) websites. Currently, I'm focused
        on making web applications with different tools to take my skills to the
        next level.
      </SectionText>
      {/* <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
