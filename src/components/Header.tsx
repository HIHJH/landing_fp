import styled from "styled-components";
import LogoIcon from "@assets/images/logo.svg";
import { colors } from "@/styles/colors";
import { useNavigate } from "react-router-dom";
import { media } from "@/styles/media";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <TopBar>
        <Logo onClick={() => navigate("/")} src={LogoIcon} />
        <PreRegisterationBtn onClick={() => navigate("/pre-registration")}>
          사전신청하러가기
        </PreRegisterationBtn>
      </TopBar>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  z-index: 999;
`;
const TopBar = styled.div`
  display: flex;
  padding: 1rem 3.75rem;
  justify-content: space-between;
  align-items: center;

  ${media.phone`
  padding: 0.5rem 1.25rem;
  `}
`;
const Logo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;

  ${media.phone`
  width: 1.75rem;
height: 1.75rem;
  `}
`;
const PreRegisterationBtn = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: ${colors.gray900};
  color: ${colors.white};
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  ${media.phone`
  padding: 0.75rem 0.625rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  `}
`;
