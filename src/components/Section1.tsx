import styled from "styled-components";
import BackgroundImage from "@assets/images/Section1.png";
import BackgroundImage_phone from "@assets/images/Section1-phone.png";
import ArrowIcon from "@assets/images/arrow_left.svg";
import { motion } from "framer-motion";
import { colors } from "@/styles/colors";
import { useNavigate } from "react-router-dom";
import { media } from "@/styles/media";
import { BackImageProps } from "./types";

const Section1 = () => {
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
    <Container initial="offscreen" whileInView="onscreen" variants={Variants}>
      <TitleBox>
        <Title>
          당신만을 위한 <Bold>푸드패스</Bold>
        </Title>
        <SubTitle>저 여기 단골인데.. 할인좀 해주세요!</SubTitle>
      </TitleBox>
      <ImageBox>
        <BackImage visible={"desktop"} src={BackgroundImage} />
        <BackImage visible={"phone"} src={BackgroundImage_phone} />
        <TextBoxL>{`나 공강때 여기만 가는데\n단골로 인정받고싶어`}</TextBoxL>
        <TextBoxR>{`매일 가는 가게라서\n할인 좀 받고싶은데 ... 안되려나`}</TextBoxR>
        <ButtonBox>
          <SubText>지금 신청하면, 평생 무료로 할인받아요</SubText>
          <Button
            initial="default"
            whileHover="scaleUp"
            variants={Variants}
            onClick={() => navigate("/pre-registration")}
          >
            평생 무료로 단골 혜택 받기
          </Button>
        </ButtonBox>
        <ButtomBox>
          <ScrollBox variants={Variants} animate="animate">
            <SubScrollText>SCROLL</SubScrollText>
            <ScrollIcon src={ArrowIcon} />
          </ScrollBox>
        </ButtomBox>
      </ImageBox>
    </Container>
  );
};

export default Section1;

const Container = styled(motion.div)<any>`
  display: flex;
  margin-top: 5rem;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100vw;

  ${media.phone`
    margin-top: 3.25rem;
    height: 50.75rem;
  `}
`;
const ImageBox = styled.div`
  position: relative;
  width: 100vw;
  height: 50.3125rem;

  ${media.phone`
    height: 100%;
  `}
`;
const BackImage = styled.img<BackImageProps>`
  width: 100%;
  object-fit: cover;
  display: ${(props) => (props.visible === "phone" ? "none" : "block")};

  ${media.phone`
    display: ${(props: { visible: string }) =>
      props.visible === "desktop" ? "none" : "block"};
  `}
`;
const TitleBox = styled.div`
  display: flex;
  width: 120rem;
  padding: 1.625rem 3.75rem;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  ${media.phone`
  width: 100%;
padding: 1.625rem 1.25rem;
gap: 0;
  `}
`;
const Title = styled.span`
  text-align: center;
  font-size: 3.875rem;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.01438rem;

  ${media.phone`
  font-size: 2rem;
font-weight: 800;
  `}
`;
const Bold = styled.span`
  text-align: center;
  font-size: 3.875rem;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.01438rem;
  color: ${colors.primary};

  ${media.phone`
  font-size: 2rem;
font-weight: 800;
  `}
`;
const SubTitle = styled.span`
  color: ${colors.gray800};
  text-align: center;
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.01438rem;

  ${media.phone`
  font-size: 1rem;
font-weight: 600;
  `}
`;
const TextBoxL = styled.div`
  display: flex;
  position: absolute;
  top: 9.81rem;
  left: 8.19rem;
  z-index: 2;
  width: 32.25rem;
  padding: 1.4375rem 0.5625rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 62.4375rem;
  border: 2px solid #fff;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 1.416px 6.371px 0.708px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 140%;
  white-space: pre-wrap;

  ${media.phone`
  top: 18.06rem;
  left: 1.25rem;
    width: 9.375rem;
    padding: 0.75rem 1.125rem;
    font-size: 0.75rem;
  `}
`;

const TextBoxR = styled.div`
  display: flex;
  position: absolute;
  top: 21.25rem;
  right: 8.19rem;
  z-index: 2;
  width: 32.25rem;
  padding: 1.4375rem 0.5625rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 62.4375rem;
  border: 2px solid #fff;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 1.416px 6.371px 0.708px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 140%;
  white-space: pre-wrap;

  ${media.phone`
  top: 1rem;
  right: 1.25rem;
    width: 9.375rem;
    padding: 0.75rem 1.125rem;
    font-size: 0.75rem;
  `}
`;

const ButtonBox = styled.div`
  position: absolute;
  top: 32.44rem;
  display: flex;
  width: 120rem;
  flex-direction: column;
  align-items: center;
  gap: 1.3125rem;
  z-index: 2;

  ${media.phone`
  bottom: 9rem;
  width: 100%;
  justify-content: center;
gap: 0.5rem;
  `}
`;
const SubText = styled.div`
  text-align: center;
  font-size: 1.625rem;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.01438rem;

  ${media.phone`
  font-size: 0.875rem;
  `}
`;
const Button = styled(motion.div)<any>`
  display: flex;
  width: 39rem;
  padding: 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1rem;
  background: ${colors.gray900};
  color: ${colors.white};
  text-align: center;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.01438rem;
  cursor: pointer;

  ${media.phone`
  width: 16.4375rem;
height: 1.5rem;
padding: 0.75rem 1.25rem;
border-radius: 0.5rem;
font-size: 0.875rem;
  `}
`;
const ButtomBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 120rem;
  padding: 2.125rem 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 100%
  );

  ${media.phone`
  width: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.80) 100%);
backdrop-filter: blur(2px);
  `}
`;
const SubScrollText = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 100%;

  ${media.phone`
  font-size: 0.75rem;
  `}
`;
const ScrollBox = styled(motion.div)<any>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
`;
const ScrollIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;
