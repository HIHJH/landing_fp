import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Delete from "@assets/images/Delete.svg";
import "react-toastify/dist/ReactToastify.css";
import { SearchModalBox, SearchModalContent } from "@/styles/ModalStyle";
import { media } from "@/styles/media";

interface ModalProps {
  clickModal: () => void;
}

// 공통 모달 컴포넌트
const Modal = (props: ModalProps) => {
  // 전달받은 state 함수
  const { clickModal } = props;

  return (
    <AnimatePresence>
      <SearchModalBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={clickModal}
      >
        <SearchModalContent
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <Icon src={Delete} onClick={clickModal} />
          <ModalContent>
            <Content>푸드패스 신청이 완료되었습니다!</Content>
            <MiniText>{`정식 오픈 직후, 작성해주신 연락처로\n단골혜택 안내를 가장 먼저 받아보실 수 있습니다.`}</MiniText>
          </ModalContent>
        </SearchModalContent>
      </SearchModalBox>
    </AnimatePresence>
  );
};

export default Modal;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  gap: 8px;
`;
const Content = styled.div`
  color: #000;
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 4.21875rem;

  ${media.phone`
  font-size: 1rem;
  line-height: 2rem`}
`;
const Icon = styled.img`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  ${media.phone`
  top: 1rem;
  right: 1rem;
  width: 1rem;
  height: 1rem;`}
`;
const MiniText = styled.div`
  color: #7b8696;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.8rem;
  letter-spacing: -0.01563rem;
  text-align: center;
  white-space: pre-wrap;

  ${media.phone`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: -0.01563rem;
  `}
`;
