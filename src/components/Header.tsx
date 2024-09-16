import styled from "styled-components";
import LogoIcon from "@assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import { media } from "@/styles/media";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <TopBar>
        <Logo onClick={() => navigate("/")} src={LogoIcon} />
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
  justify-content: center;
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
