import styled from "styled-components";
import Image1 from "@assets/images/Section5-1.png";
import Image2 from "@assets/images/Section5-2.png";
import Image3 from "@assets/images/Section5-3.png";
import Image4 from "@assets/images/Section5-4.png";
import Image5 from "@assets/images/Section5-5.png";
import Image6 from "@assets/images/Section5-6.png";
import { motion } from "framer-motion";
import { media } from "@/styles/media";

const Section5 = () => {
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
        <Title>쏟아지는 단골가게 혜택</Title>
        <SubTitle>{`내가 자주 가는 식당을 단골 가게로\n등록하고 혜택을 맘껏 누리세요!`}</SubTitle>
      </TitleBox>
      <ImageGrid initial="offscreen" whileInView="onscreen" variants={Variants}>
        <Image src={Image1} />
        <Image src={Image2} />
        <Image src={Image3} />
        <Image src={Image4} />
        <Image src={Image5} />
        <Image src={Image6} />
      </ImageGrid>
    </Container>
  );
};

export default Section5;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.94rem;
  width: 120rem;
  height: 67.5rem;
  padding: 11.13rem 0 11.25rem 0;
  background: #f9fafc;
  ${media.phone`
    width:100%;
    height: 33rem;
    padding: 2.88rem 0 1.85rem 0;
    gap: 1.88rem;
  `}
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.31rem;
  ${media.phone`
    gap: 0.5rem;
  `}
`;
const Title = styled(motion.div)`
  text-align: center;
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 3.75rem;
  ${media.phone`
  font-size: 1.25rem;
line-height: 1.75rem;
  `}
`;
const SubTitle = styled.div`
  text-align: center;
  font-size: 2.25rem;
  font-weight: 500;
  line-height: 3.125rem;
  letter-spacing: -0.01438rem;
  white-space: pre-wrap;
  ${media.phone`
  font-size: 0.875rem;
line-height: 1.375rem;`}
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
const ImageGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  width: 70.75rem;
  height: auto;
  ${media.phone`
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  width: 18rem;
  `}
`;
