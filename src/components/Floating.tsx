import styled from "styled-components";
import LogoIcon from "@assets/images/logo_white.svg";
import { colors } from "@/styles/colors";
import { useNavigate } from "react-router-dom";
import { media } from "@/styles/media";

const Floating = () => {
  const navigate = useNavigate();

  return (
    <FloatingBtn onClick={() => navigate("/pre-registration")}>
      <Image src={LogoIcon} />
    </FloatingBtn>
  );
};

export default Floating;

const FloatingBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  width: 7rem;
  height: 7rem;
  border-radius: 7rem;
  background-color: ${colors.gray900};
  z-index: 999;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  ${media.phone`
  bottom: 1.5rem;
  right: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 2.5rem;
  `}
`;
const Image = styled.img`
  width: 4rem;
  height: 4rem;
  ${media.phone`
  width: 1.5rem;
  height: 1.5rem;
  `}
`;
