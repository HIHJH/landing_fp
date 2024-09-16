import { ToastContainer } from "react-toastify";
import styled from "styled-components";

// 토스트 컴포넌트
export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    border-radius: 1rem;
    padding: 1rem 3rem;
    text-align: center;
    background: #fff;
    color: #000;
    font-size: 2rem;
    font-weight: 500;
  }
`;
