import Floating from "@/components/Floating";
import Header from "@/components/Header";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import styled from "styled-components";

const Landing = () => {
  return (
    <Container>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Floating />
    </Container>
  );
};

export default Landing;

const Container = styled.div`
  width: 100vw;
  overflow: hidden;
`;
