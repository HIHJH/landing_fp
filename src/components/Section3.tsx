import styled from "styled-components";
import BackgroundImage from "@assets/images/Section3.png";
import BackgroundImage_phone from "@assets/images/Section3-phone.png";
import { motion } from "framer-motion";
import { colors } from "@/styles/colors";
import { media } from "@/styles/media";
import { BackImageProps } from "./types";

const Section3 = () => {
  const Variants = {
    default: {
      scale: 0.8,
    },
    scaleUp: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };
  return (
    <Container>
      <Title>{`단골로 등록만하면,\n모두 다 할인가로 즐길 수 있어요!`}</Title>
      <Image
        visible="desktop"
        initial="default"
        whileInView="scaleUp"
        variants={Variants}
        src={BackgroundImage}
      />
      <Image
        visible="phone"
        initial="default"
        whileInView="scaleUp"
        variants={Variants}
        src={BackgroundImage_phone}
      />
      <SubText>푸드패스로 새로운 혜택을 무료로 !</SubText>
    </Container>
  );
};

export default Section3;

const Container = styled.div`
  display: flex;
  height: 55rem;
  padding: 6.625rem 0rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${colors.white};

  ${media.phone`
  height: 26rem;
padding: 3rem 1.25rem;
  `}
`;

const Title = styled.div`
  text-align: center;
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 3.75rem;
  white-space: pre-wrap;

  ${media.phone`
  font-size: 1.25rem;
font-weight: 700;
line-height: 1.75rem;
  `}
`;
const Image = styled(motion.img)<BackImageProps>`
  width: 100%;
  display: ${(props) => (props.visible === "phone" ? "none" : "block")};

  ${media.phone`
    display: ${(props: { visible: string }) =>
      props.visible === "desktop" ? "none" : "block"};
  `}
`;
const SubText = styled.span`
  color: ${colors.gray800};
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 2.5rem;

  ${media.phone`
  font-size: 0.875rem;
line-height: 1.375rem; 
  `}
`;
