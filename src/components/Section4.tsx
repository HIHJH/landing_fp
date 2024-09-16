import styled from "styled-components";
import BackgroundImage from "@assets/images/Section4.png";
import BackgroundImage_phone from "@assets/images/Section4-phone.png";
import { motion } from "framer-motion";
import { colors } from "@/styles/colors";
import { media } from "@/styles/media";
import { BackImageProps } from "./types";

const Section4 = () => {
  const Variants = {
    offscreen: {
      y: +20,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0,
      },
    },
  };

  return (
    <Container>
      <TitleBox>
        <Title>내가만드는</Title>
        <Title style={{ color: colors.primary }}>커스텀 푸드 멤버십</Title>
      </TitleBox>
      <Image
        visible="desktop"
        initial="offscreen"
        whileInView="onscreen"
        variants={Variants}
        src={BackgroundImage}
      />
      <Image
        visible="phone"
        initial="offscreen"
        whileInView="onscreen"
        variants={Variants}
        src={BackgroundImage_phone}
      />
    </Container>
  );
};

export default Section4;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 120rem;
  height: 67.5rem;
  padding: 3.44rem 0 6.33rem 0;
  background: ${colors.white};

  ${media.phone`
  width: 100%;
  height:20rem;
  padding: 1.19rem 0 1.5rem 0;
  `}
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  ${media.phone`
    gap: 0;`}
`;
const Title = styled.div`
  text-align: center;
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 3.75rem;
  white-space: pre-wrap;
  ${media.phone`
  font-size: 1.25rem;
line-height: 1.75rem;`}
`;
const Image = styled(motion.img)<BackImageProps>`
  width: 100.875rem;
  height: 45.6875rem;
  display: ${(props) => (props.visible === "phone" ? "none" : "block")};

  ${media.phone`
    display: ${(props: { visible: string }) =>
      props.visible === "desktop" ? "none" : "block"};
      width: 21rem;
      height:auto;
  `}
`;
