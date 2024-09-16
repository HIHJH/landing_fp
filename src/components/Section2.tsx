import styled from "styled-components";
import BackgroundImage from "@assets/images/Section2.png";
import BackgroundImage_phone from "@assets/images/Section2-phone.png";
import { motion } from "framer-motion";
import { BackImageProps } from "./types";
import { media } from "@/styles/media";

const Section2 = () => {
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
      <BackImage visible="desktop" src={BackgroundImage} />
      <BackImage visible="phone" src={BackgroundImage_phone} />
      <Title
        initial="offscreen"
        whileInView="onscreen"
        variants={Variants}
      >{`내가 자주 가는 카페, 음식점만 등록하면\n나만을 위한 할인혜택이?`}</Title>
      <SubTitle
        style={{ marginBottom: "2.75rem" }}
        initial="offscreen"
        whileInView="onscreen"
        variants={Variants}
      >{`다들 단골가게 하나쯤은 있지 않으신가요?`}</SubTitle>
      <SubTitle
        initial="offscreen"
        whileInView="onscreen"
        variants={Variants}
      >{`단골가게를 서비스에 등록만하면,\n내가 자주가는 가게에서 할인가로 만나볼 수 있어요!`}</SubTitle>
    </Container>
  );
};

export default Section2;

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: relative;
  width: 120rem;
  height: 67.5rem;

  ${media.phone`
    width: 100%;
    height: 35rem;
  `}
`;
const BackImage = styled.img<BackImageProps>`
  width: 100%;
  height: 67.5rem;
  object-fit: cover;
  display: ${(props) => (props.visible === "phone" ? "none" : "block")};

  ${media.phone`
    display: ${(props: { visible: string }) =>
      props.visible === "desktop" ? "none" : "block"};
    height: auto;
  `}
`;
const Title = styled(motion.div)`
  position: absolute;
  top: 6.63rem;
  text-align: center;
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 3.75rem;
  white-space: pre-wrap;

  ${media.phone`
        top: 3rem;
        font-size: 1.25rem;
        line-height: 1.75rem;
    `}
`;
const SubTitle = styled(motion.div)`
  position: absolute;
  bottom: 6.63rem;
  text-align: center;
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.01438rem;

  ${media.phone`
    font-size: 0.875rem;
    line-height: 1.375rem;
    bottom: 3rem;
    white-space: pre-wrap;
    `}
`;
