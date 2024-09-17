import { motion } from "framer-motion";
import styled from "styled-components";
import { media } from "./media";

// 모달 창 뒷배경
export const SearchModalBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

// 모달 스타일
export const SearchModalContent = styled(motion.div)`
  font-family: Pretendard;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 3.19rem 6.25rem;
  width: 35rem;
  height: 20rem;
  border-radius: 1.25rem;
  background: #fff;
  z-index: 5;

  ${media.phone`
  width: 70vw;
    height: 8rem;
    padding: 2rem;
  `}
`;
