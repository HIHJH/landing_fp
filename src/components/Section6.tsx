import styled from "styled-components";
import BackgroundImage from "@assets/images/Section6.png";
import BackgroundImage_phone from "@assets/images/Section6-phone.png";
import { colors } from "@/styles/colors";
import { motion } from "framer-motion";
import { media } from "@/styles/media";
import { BackImageProps } from "./types";

const Section6 = () => {
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

export default Section6;

const Container = styled.div`
  display: flex;
  padding: 6.4375rem 7.9375rem 19rem 7.9375rem;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  ${media.phone`
    width: 100%;
    padding: 0;
  `}
`;
const Image = styled(motion.img)<BackImageProps>`
  width: 104.125rem;
  height: 42.0625rem;
  display: ${(props) => (props.visible === "phone" ? "none" : "block")};
  ${media.phone`
    width:100%;
    height: auto;
    display: ${(props: { visible: string }) =>
      props.visible === "desktop" ? "none" : "block"};
  `}
`;
