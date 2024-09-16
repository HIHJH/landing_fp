import Header from "@/components/Header";
import Register from "@/components/Register";
import { colors } from "@/styles/colors";
import { media } from "@/styles/media";
import styled from "styled-components";

const PreRegistration = () => {
  return (
    <Container>
      <Header />
      <Register />
    </Container>
  );
};

export default PreRegistration;

const Container = styled.div`
  width: 120rem;
  overflow: hidden;
  background: ${colors.white};
  ${media.phone`
    width:100%;
  `}
`;
