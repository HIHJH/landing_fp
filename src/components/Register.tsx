import styled from "styled-components";
import { colors } from "@/styles/colors";
import { useEffect, useState } from "react";
import { postEmailApi } from "@/apis/apis";
import { StyledToastContainer } from "@/styles/toastStyle";
import { Flip } from "react-toastify";
import { media } from "@/styles/media";

const Register = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const [phoneNum, setPhoneNum] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const handleChangePhoneNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNum(e.target.value);
  };
  const handleChangePlace = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPlace(e.target.value);
  };

  const postPhoneNum = async (phoneNum: string) => {
    try {
      await postEmailApi().then(() => {
        setPhoneNum("");
        console.log(phoneNum);
        //toast('사전 알림 신청 완료!')
      });
    } catch {
      console.log("실패");
      //toast('사전 알림 신청 실패!')
    }
  };

  useEffect(() => {
    phoneNum == "" ? setIsActive(false) : setIsActive(true);
  }, [phoneNum]);

  return (
    <Container>
      <TitleBox>
        <Title>평생 무료로 단골 혜택 받기</Title>
        <SubTitle>{`지금 신청하시면, 얼리버드로 단골 식당을 지정하고\n추가 혜택을 받아볼 수 있어요`}</SubTitle>
      </TitleBox>
      <InputBox>
        <TextBox>
          <InputTitle>전화번호</InputTitle>
          <InputDescription>*필수</InputDescription>
        </TextBox>
        <InputPhone
          placeholder="XXX - XXXX - XXXX"
          value={phoneNum}
          onChange={handleChangePhoneNum}
        />
      </InputBox>
      <InputBox>
        <TextBox>
          <InputTitle>단골로 지정할 식당</InputTitle>
        </TextBox>
        <InputPlace
          placeholder={`단골로 지정하고 싶은 식당을 적어주세요.\n체인점이라면, 정확한 상호명과 지점명을 명시해주세요.`}
          value={place}
          onChange={handleChangePlace}
        />
      </InputBox>
      <Button
        disabled={phoneNum == ""}
        active={isActive ? 1 : 0}
        onClick={() => postPhoneNum(phoneNum)}
      >
        입력 완료
      </Button>
      <StyledToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar
        pauseOnHover={false}
        closeOnClick={false}
        closeButton={false}
        rtl={false}
        theme="light"
        transition={Flip}
      />
    </Container>
  );
};

export default Register;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2.25rem 15rem;
  margin-top: 5rem;
  ${media.phone`
padding: 2.25rem 1.25rem 1.25rem 1.25rem;
margin-top: 3rem;
  `}
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  ${media.phone`
    gap: 0.5rem;
  `}
`;
const Title = styled.span`
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 3.75rem;
  ${media.phone`
  font-size: 1.25rem;
line-height: 2rem;
  `}
`;
const SubTitle = styled.span`
  color: ${colors.gray500};
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.02363rem;
  white-space: pre-wrap;
  ${media.phone`
  font-size: 0.875rem;
line-height: 1.375rem;
  `}
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 6.75rem;
  align-items: flex-start;
  border-radius: 0.75rem;
  margin-top: 3.88rem;
  gap: 0.76rem;
  ${media.phone`
  width: 95vw;
  height: 5rem;
  gap: 0.5rem;`}
`;
const TextBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  ${media.phone`
  width: 92vw;`}
`;
const InputTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.01419rem;
  ${media.phone`
  font-size: 1rem;
line-height: 1.5rem;`}
`;
const InputDescription = styled.div`
  color: ${colors.gray500};
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 125%;
  letter-spacing: -0.02363rem;
  margin-right: 1rem;
  ${media.phone`
  font-size: 0.875rem;
line-height: 1.375rem;
  `}
`;
const InputPhone = styled.input`
  width: 98%;
  display: flex;
  padding: 1.5rem 0.875rem;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.00938rem;
  background: #f7f7f9;
  &::placeholder {
    color: ${colors.gray300};
  }
  &:focus {
    outline: none;
    border: 1px solid #dedede;
    background: #ededed;
  }
  ${media.phone`
    width: 87%;
    padding: 0rem 0.875rem;
    height: 5rem;
  `}
`;
const InputPlace = styled.textarea`
  width: 97%;
  min-height: 21.9375rem;
  resize: none;
  font-family: Pretendard;
  display: flex;
  padding: 1.324rem;
  align-items: flex-start;
  flex: 1 0 0;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 2.0625rem;
  letter-spacing: -0.02363rem;
  background: #f7f7f9;
  &::placeholder {
    color: ${colors.gray300};
  }
  &:focus {
    outline: none;
    border: 1px solid #dedede;
    background: #ededed;
  }
  ${media.phone`
  font-size: 0.875rem;
line-height: 1.375rem;
width: 86.5%;
min-height: 13rem;
padding: 0.875rem;
  `}
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
  `}
`;
