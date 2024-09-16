import styled from "styled-components";
import { colors } from "@/styles/colors";
import { useNavigate } from "react-router-dom";
import { media } from "@/styles/media";
import { motion } from "framer-motion";

const Floating = () => {
  const navigate = useNavigate();

  const Variants = {
    offscreen: {
      y: +50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.1,
      },
    },
    animate: {
      y: [0, 3, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
    default: {
      scale: 1,
    },
    scaleUp: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        delay: 0,
      },
    },
  };

  return (
    <FloatingBox>
      <Button
        initial="offscreen"
        whileHover="scaleUp"
        whileInView="onscreen"
        variants={Variants}
        onClick={() => navigate("/pre-registration")}
      >
        평생 무료로 단골 혜택 받기
      </Button>
    </FloatingBox>
  );
};

export default Floating;

const FloatingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 3rem;
  width: 100%;
  z-index: 999;
  cursor: pointer;
  ${media.phone`
  bottom: 1.5rem;
  `}
`;
const Button = styled(motion.div)<any>`
  width: 39rem;
  padding: 1.25rem;
  border-radius: 1rem;
  background: ${colors.gray900};
  color: ${colors.white};
  border-radius: 1rem;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25),
    0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.01438rem;
  z-index: 1000;
  cursor: pointer;

  ${media.phone`
  width: 18.4375rem;
height: 1.3rem;
padding: 0.75rem 1.25rem;
border-radius: 0.5rem;
font-size: 0.875rem;
  `}
`;
