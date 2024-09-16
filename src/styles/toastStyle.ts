import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { colors } from "./colors";
import { media } from "./media";

// 토스트 컴포넌트
export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    position: absolute;
    width: 73%;
    bottom: 2.3rem;
    display: flex;
    padding: 1.25rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    margin-top: 26.9375rem;
    background: ${colors.gray900};
    color: #fff;
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.01438rem;
    outline: none;
    border: none;
    ${media.phone`
  display: flex;
  bottom: 1.25rem;
width: 80%;
height: 3.0625rem;
padding: 0 1.25rem;
gap: 0.5rem;
font-size: 0.875rem;
margin-top: 20rem;
  `}
  }
`;

const Button = styled.button<{ active: number }>`
  display: flex;
  padding: 1.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  margin-top: 26.9375rem;
  background: ${(props) => (props.active ? colors.gray900 : "#c7c7c7")};
  color: #fff;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.01438rem;
  outline: none;
  border: none;
  cursor: pointer;
  ${media.phone`
  display: flex;
width: 21rem;
height: 3.0625rem;
padding: 0.75rem 1.25rem;
gap: 0.5rem;
flex-shrink: 0;
font-size: 0.875rem;
margin-top: 20rem;
  `}
`;
